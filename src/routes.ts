import { Router } from "express"
import { CreateFuncionarioController } from "./modules/funcionarios/useCases/createFuncionario/CreateFuncionarioController"

const routes = Router()

const createFuncrionarioController = new CreateFuncionarioController()
routes.post('/funcionarios', createFuncrionarioController.handle)

export { routes }
