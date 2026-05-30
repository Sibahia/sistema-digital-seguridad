import { spawn } from 'child_process';
import http from 'http';

console.log('Iniciando prueba de integración del servidor...');

const serverProcess = spawn('node', ['src/index.js'], {
    env: { ...process.env, PORT: '3000', NODE_ENV: 'test' },
    detached: false
});

serverProcess.stdout.on('data', (data) => {
    console.log(`[Server]: ${data.toString().trim()}`);
});

serverProcess.stderr.on('data', (data) => {
    console.error(`[Server Error]: ${data.toString().trim()}`);
});

const checkServerReady = (retries = 5) => {
    return new Promise((resolve, reject) => {
        const request = http.get('http://localhost:3000/api', (res) => {
            console.log(`Verificación exitosa. El servidor Express respondió con estado: ${res.statusCode}`);
            resolve(true);
        });

        request.on('error', (err) => {
            if (retries === 0) {
                reject(new Error('El servidor no respondió a tiempo en el puerto 3000'));
            } else {
                setTimeout(() => {
                    checkServerReady(retries - 1).then(resolve).catch(reject);
                }, 1500);
            }
        });
    });
};

setTimeout(async () => {
    try {
        await checkServerReady();
        console.log('Pruebas superadas con éxito. Cerrando servidor...');
        serverProcess.kill('SIGTERM');
        process.exit(0);
    } catch (error) {
        console.error(`Fallo en el pipeline: ${error.message}`);
        serverProcess.kill('SIGKILL');
        process.exit(1);
    }
}, 2000);