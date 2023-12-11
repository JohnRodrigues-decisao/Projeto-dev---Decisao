import { Request, Response } from "express";
import { Pessoa } from "../models/pessoa";

export const postPessoa = async(req: Request, res: Response) => {
      const { body } = req;
      try{
            await Pessoa.create(body);

            res.json({
                  msg: "Cliente cadastrado com sucesso!"
            });

      } catch (error) {
            console.log(error);
            res.json({
              msg: `${error}`,
            });
      }
};

export const getPessoa =async (req: Request, res: Response) => {
      const listPessoas = await Pessoa.findAll();
      res.json(listPessoas);
};