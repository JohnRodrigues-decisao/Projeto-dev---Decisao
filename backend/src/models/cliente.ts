import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Cliente = sequelize.define(
  "cliente",
  {
    // Definição dos campos da tabela 'pessoa'
    idPessoa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_cadastro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    situacao: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "ativo",
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);