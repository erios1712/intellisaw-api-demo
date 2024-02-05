import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const betapd = sequelize.define(
    "betapd",
    {
        beta1pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        beta2pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        beta3pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        beta4pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "betapd",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default betapd;