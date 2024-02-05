import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const sdnum = sequelize.define(
    "sdnum",
    {
        sd1num: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        sd2num: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        sd3num: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        sd4num: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "sdnum",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default sdnum;