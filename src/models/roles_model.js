import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const Roles = sequelize.define('Roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombreRol: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'nombre_rol'
    }
}, {
    tableName: 'roles',
    timestamps: true,
})