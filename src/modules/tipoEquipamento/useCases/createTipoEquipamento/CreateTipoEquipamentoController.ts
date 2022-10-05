import { Request, Response } from "express";
import { CreateTipoEquipamentoUseCase } from "../../../tipoEquipamento/useCases/createTipoEquipamento/CreateTipoEquipamentoUseCase";



export class CreateTipoEquipamentoController {
  async handle(req: Request, res: Response) {
    const { descricao } = req.body

    const createTipoEquipamentoUseCase = new CreateTipoEquipamentoUseCase()

    const result = await createTipoEquipamentoUseCase.execute({ descricao })

    return res.json(result)
  }
}
