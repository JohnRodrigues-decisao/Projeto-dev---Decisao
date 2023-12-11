import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Pessoa = sequelize.define(
  "pessoa",
  {
    // Definição dos campos da tabela 'pessoa'
    idPessoa: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },
    nome: {
      type: DataTypes.TEXT, 
      allowNull: false,
    },
    identificacao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nome_fantasia: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nome_mae: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    inscricao_municipal: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    inscricao_estadual: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    hooks: {
      beforeValidate: function (instance: any, options: any) {
        // Validação | nome preenchido
        if (instance.nome === "" || instance === undefined) {
          throw new Error(
            "O nome deve ser preenchido para realizar o cadastro."
          );
        }

        // validação da identificação
        if (instance.identificacao.length === 14) {
          if (
            !instance.nome_fantasia ||
            instance.nome_fantasia === "" ||
            instance.nome_fantasia === undefined
          ) {
            throw new Error("Nome fantasia é obrigatório para o CNPJ");
          } else if (instance.nome_mae) {
            throw new Error("O nome da mãe não deve ser preenchido.");
          } else if (instance.inscricao_municipal === '') {
            throw new Error("A inscrição municipal deve ser preenchida.");
          } else if (instance.inscricao_estadual === '') {
            throw new Error("A inscrição estadual deve ser preenchida.");
          }
        }

        if (instance.identificacao.length === 11) {
          if (
            !instance.nome_mae ||
            instance.nome_mae === "" ||
            instance.nome_mae === undefined
          ) {
            throw new Error("Nome da mãe é obrigatório para cadastrar o CPF");
          } else if (instance.nome_fantasia) {
            throw new Error("O nome fantasia não deve ser preenchido.");
          } else if (instance.inscricao_municipal) {
            throw new Error("A inscrição municipal não deve ser preenchida.");
          } else if (instance.inscricao_estadual) {
            throw new Error("A inscrição estadual não deve ser preenchida.");
          }
        } else if (
          instance.identificacao.length != 14 &&
          instance.identificacao.length != 11
        ) {
          throw new Error(
            "O CPF ou CNPJ devem ser preenchidos para realizar o cadastro."
          );
        }
      },
    },
  }
);