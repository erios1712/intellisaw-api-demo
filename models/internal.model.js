import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const internal = sequelize.define(
    "internal",
    {
        internal1: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal2: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal3: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal4: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal5: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal6: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal7: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal8: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal9: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal10: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal11: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },
        internal12: {
            type: DataTypes.INTEGER,
            allowNull: true,            
        },   
    },
    {
        tableName: "internal",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default internal;