import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const GestionClaves = sequelize.define('GestionClaves', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    archivoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'archivo_id'
    },

    claveCifrada: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'clave_cifrada'
    },

    fechaGeneracion: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'fecha_generacion',
        defaultValue: DataTypes.NOW
    },

    fechaRotacionProgramada: {
        type: DataTypes.DATE,
        allowNull: false
    },

    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'gestion_claves',
    timestamps: true
})