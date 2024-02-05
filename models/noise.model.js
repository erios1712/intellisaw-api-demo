import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const noise = sequelize.define(
    "noise",
    {
        noise1: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise2: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise3: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise4: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise5: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise6: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise7: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise8: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise9: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise10: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise11: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        noise12: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },   
    },
    {
        tableName: "noise",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default noise;