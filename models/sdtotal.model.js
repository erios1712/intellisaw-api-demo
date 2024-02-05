import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const sdtotal = sequelize.define(
    "sdtotal",
    {
        sd1total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        sd2total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        sd3total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        sd4total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "sdtotal",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default sdtotal;