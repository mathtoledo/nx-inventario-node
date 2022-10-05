import { Request, Response } from "express";
import { FindAllFuncionariosUseCase } from "./FindAllFuncionariosUseCase";

export class FindAllFuncionariosController {
  async handle(req: Request, res: Response) {
    const findAllFuncionariosUseCase = new FindAllFuncionariosUseCase()

    const result = await findAllFuncionariosUseCase.execute()

    return res.json(result)
  }
}
