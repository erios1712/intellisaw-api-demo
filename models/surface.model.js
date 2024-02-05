import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const surface = sequelize.define(
    "surface",
    {
        surface1: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface2: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface3: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface4: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface5: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface6: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface7: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface8: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface9: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface10: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface11: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        surface12: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },   
    },
    {
        tableName: "surface",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default surface;