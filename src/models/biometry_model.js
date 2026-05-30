import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

export const Biometry = sequelize.define('biometry', {
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

    tipoBiometria: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'tipo_biometria'
    },


}, {
    tableName: 'biometry',
    timestamps: true
})