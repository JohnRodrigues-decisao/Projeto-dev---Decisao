import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Conta } from "../models/user";
import jwt from "jsonwebtoken";

// Novo usuário
export const newUser = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  const conta = await Conta.findOne({ where: { email: email } });

  if (conta) {
    return res.status(400).json({
      msg: `Já existe um usuário com este email: ${email} cadastrado.`,
    });
  }

  const hashPassword = await bcrypt.hash(senha, 10);

  try {
    await Conta.create({
      nome: nome,
      email: email,
      senha: hashPassword,
    });

    res.json({
      msg: `O usuário ${nome} foi criado com sucesso!🔥`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ooops ocorreu um erro, entre em contato com o suporte!",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  // Validamos se o usuario existe na base de dados
  const conta: any = await Conta.findOne({ where: { email: email } });

  if (!conta) {
    res.status(400).json({
      msg: `Não existe um usuário com esse Email: ${email} cadastrado.`,
    });
  }

  // Validamos password

  const senhaValid = await bcrypt.compare(senha, conta.senha);
  console.log(senhaValid);
  if (!senhaValid) {
    return res.status(400).json({
      msg: "Usuário ou senha inválida!",
    });
  }

  // Geramos o token
  const token = jwt.sign(
    {
      email: email,
    },
    process.env.SECRET_KEY || "john123"
  );

  res.json({ token });
};
 