import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const pdtotal = sequelize.define(
    "pdtotal",
    {
        pd1total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        pd2total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        pd3total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        pd4total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "pdtotal",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default pdtotal;