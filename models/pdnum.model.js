import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const pdnum = sequelize.define(
    "pdnum",
    {
        pd1num: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        pd2num: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        pd3num: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        pd4num: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "pdnum",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default pdnum;