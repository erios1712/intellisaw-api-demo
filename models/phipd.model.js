import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const phipd = sequelize.define(
    "phipd",
    {
        phi1pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        phi2pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        phi3pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        phi4pd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "phipd",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default phipd;