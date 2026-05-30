import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const Usuarios = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombreUsuario: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        field: 'nombre_usuario'
    },

    password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'password_hash'
    },

    rolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'rol_id'
    },

    nivelClasificacionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'nivel_clasificacion_id'
    },

    fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'fecha_creacion'
    },

    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'usuarios',
    timestamps: true
})