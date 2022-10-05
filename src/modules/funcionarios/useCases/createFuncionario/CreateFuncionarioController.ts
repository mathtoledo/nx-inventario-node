import { Request, Response } from "express";
import { CreateFuncionarioUseCase } from "./createFuncionarioUseCase";

export class CreateFuncionarioController {
  async handle(req: Request, res: Response) {
    const { nome, cpf, dataNascimento, dataInicioEmpresa, workFromHome } = req.body

    const createFuncrionario = new CreateFuncionarioUseCase()
    const result = await createFuncrionario.execute({
      nome,
      cpf,
      dataNascimento,
      dataInicioEmpresa,
      workFromHome,
    })

    return res.json(result)
  }
}
