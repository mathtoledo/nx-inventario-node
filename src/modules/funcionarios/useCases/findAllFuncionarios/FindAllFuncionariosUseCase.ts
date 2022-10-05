import { prisma } from "../../../../database/prismaClient"

export class FindAllFuncionariosUseCase {
  async execute() {
    const funcionarios = await prisma.funcionario.findMany()

    return funcionarios
  }
}