import { Router } from "express";
import { postPessoa, getPessoa } from "../controllers/pessoa";

const router = Router();

router.post("/", postPessoa);

router.get("/", getPessoa);

export default router;
