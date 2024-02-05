import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const betasd = sequelize.define(
    "betasd",
    {
        beta1sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        beta2sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        beta3sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        beta4sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "betasd",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default betasd;