import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const alphasd = sequelize.define(
    "alphasd",
    {
        alpha1sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        alpha2sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        alpha3sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        alpha4sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "alphasd",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default alphasd;