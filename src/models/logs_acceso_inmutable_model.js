import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const LogsAccesoInmutable = sequelize.define('Logs_acceso_inmutable', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'usuario_id'
    },

    evento: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },

    hashAnterior: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'hash_anterior'
    },

    firmaDigital: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'firma_digital'
    }
}, {
    tableName: 'logs_acceso_inmutable',
    timestamps: true
})