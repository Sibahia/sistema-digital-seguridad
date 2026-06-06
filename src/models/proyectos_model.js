import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const proyetos = sequelize.define('Proyectos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIcrement: true
    },

    nombreProyecto: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        field: 'nombre_proyecto'
    },

    nivelClasificacionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'nivel_clasificacion_id'
    }

}, {
    tableName: 'proyectos',
    timestamps: true
})