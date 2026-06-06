import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const Archivos = sequelize.define('Archivos', {
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

    nombreArchivo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'nombre_archivo'
    },

    rutaCifrada: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'ruta_cifrada'
    },

    hashOriginal: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'hash_original'
    },

    nivelClasificacionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'nivel_clasificacion_id'
    },

    proyectoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'proyecto_id'
    },

    fechaSubida: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'fecha_subida'
    },

    estado: {
        type: DataTypes.ENUM('activo', 'inactivo'),
        defaultValue: 'activo'
    }
}, {
    tableName: 'archivos',
    timestamps: true
})