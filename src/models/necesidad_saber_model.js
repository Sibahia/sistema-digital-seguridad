import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const NecesidadSaber = sequelize.define('Necesidad_saber', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    proyectoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    AutorizadoPor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    FechaConcesion: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'fecha_concesion',
    }
}, {
    tableName: 'necesidad_saber',
    timestamps: true
})