import { connectionDatabase } from './db/connection.js';

export async function startServer(app) {
    try {
        await connectionDatabase();

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server runing on port ${process.env.PORT || 300}`)
        });
    } catch (error) {
        console.log('Error starting server:', error.message)
        process.exit(1)
    }
}