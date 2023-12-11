import express, { Application } from 'express';
import cors from "cors";

// Rotas
/* import routeDashboard from '../routes/dashboard' */
import routesUsers from "../routes/user";
import pessoaRouter from "../routes/pessoa";

// Modelos
/* import { Pessoa } from './dashboard'; */
import { Conta } from './user';
import { Pessoa } from './pessoa';
import sequelize from '../db/connection';
import { Cliente } from './cliente';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";

    this.middleware();
    this.routes();
    this.listen();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `🔥 Servidor rodando na porta http://localhost:${this.port}/`
      );
    });
  }

  routes() {
    /* this.app.use("/api/dashboard", routeDashboard); */
    this.app.use("/api/pessoa", pessoaRouter);
    this.app.use("/api/users", routesUsers);
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }
  
  async dbConnect() {
    try {
      await Cliente.sync();
      await Pessoa.sync();
      await Conta.sync();
      console.log("Dados enviados com sucesso!🔥");
    } catch (error) {
      console.log(`👾Erro ao realizar a conexão ao banco de dados: ${error}`);
    }
  }   
}

export default Server;