import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const phisd = sequelize.define(
    "phisd",
    {
        phi1sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        phi2sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        phi3sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        phi4sd: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "phisd",
        timestamps: true,
        updatedAt: false,
        createdAt: "time"
    }
);

export default phisd;