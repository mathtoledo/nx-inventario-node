import { Router } from "express"
import { CreateFuncionarioController } from "./modules/funcionarios/useCases/createFuncionario/CreateFuncionarioController"
import { FindAllFuncionariosController } from "./modules/funcionarios/useCases/findAllFuncionarios/FindAllFuncrionariosController"

const routes = Router()

const createFuncrionarioController = new CreateFuncionarioController()
const findAllFuncionariosController = new FindAllFuncionariosController()

routes.post('/funcionarios', createFuncrionarioController.handle)
routes.get('/funcionarios', findAllFuncionariosController.handle)

export { routes }
