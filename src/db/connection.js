import { Sequelize } from 'sequelize';
import { AppError } from '../utils/index.js';

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

export async function connectionDatabase() {
    return sequelize.authenticate()
        .then(() => sequelize.sync({ alter: true }))
        .catch((err) => { throw new AppError(err.message, 500) })
}