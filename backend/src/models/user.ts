import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Conta = sequelize.define(
   "conta",
  {
    idConta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "compositeIndex"
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

