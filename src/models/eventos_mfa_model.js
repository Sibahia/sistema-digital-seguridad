import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const EventosMFA = sequelize.define('EventosMFA', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    tipoFactor: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    resultado: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },

    detalles: {
        type: DataTypes.STRING(255),
        allowNull: true 
    }
}, {
    tableName: 'eventos_mfa',
    timestamps: true
})