import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const clasificacionSeguridad = sequelize.define('clasificacion_seguridad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    nivelNumerico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        field: 'nivel_numerico'
    },
    descripcion: {
        type: DataTypes.STRING(250),
        allowNull:true
    },


},{
    tableName: 'classificacion_seguridad',
    timestamps: true
})