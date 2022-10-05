import { prisma } from '../../../../database/prismaClient'

interface ICreateTipoEquipamento {
  descricao: string
}

export class CreateTipoEquipamentoUseCase {
  async execute({ descricao }: ICreateTipoEquipamento) {
    const tipoEquipamento = await prisma.tipoEquipamento.create({
      data: {
        descricao
      }
    })

    return tipoEquipamento
  }

}

