import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const ambientTemp = sequelize.define(
    "ambientTemp",
    {
        ambientemp1: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        ambientemp2: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        ambientemp3: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        ambientemp4: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        ambientemp5: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        ambientemp6: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        ambientemp7: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        ambientemp8: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },   
    },
    {
        tableName: "ambientTemp",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default ambientTemp;