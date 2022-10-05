import { prisma } from "../../../../database/prismaClient"

interface ICreateFuncionario {
  nome: string
  cpf: string
  dataNascimento: Date
  dataInicioEmpresa: Date
  workFromHome: boolean
}

export class CreateFuncionarioUseCase {
  async execute({ nome, cpf, dataNascimento, dataInicioEmpresa, workFromHome }: ICreateFuncionario) {

    const funcionarioExiste = await prisma.funcionario.findFirst({
      where: {
        cpf: { mode: "insensitive" }
      }
    })

    if (funcionarioExiste) throw new Error("Funcionário já existe")

    const funcionario = await prisma.funcionario.create({
      data: {
        nome,
        cpf,
        dataNascimento: new Date(dataNascimento),
        dataInicioEmpresa: new Date(dataInicioEmpresa),
        workFromHome,
      }
    })

    return funcionario
  }
}