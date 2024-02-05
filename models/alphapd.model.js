import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const alphapd = sequelize.define(
    "alphapd",
    {
        alpha1pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        alpha2pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        alpha3pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        alpha4pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "alphapd",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default alphapd;