import { Router } from "express"
import { CreateFuncionarioController } from "./modules/funcionarios/useCases/createFuncionario/CreateFuncionarioController"
import { FindAllFuncionariosController } from "./modules/funcionarios/useCases/findAllFuncionarios/FindAllFuncrionariosController"
import { CreateTipoEquipamentoController } from "./modules/tipoEquipamento/useCases/createTipoEquipamento/CreateTipoEquipamentoController"

const routes = Router()

const createFuncrionarioController = new CreateFuncionarioController()
const findAllFuncionariosController = new FindAllFuncionariosController()

const createTipoEquipamentoController = new CreateTipoEquipamentoController()

routes.post('/funcionarios', createFuncrionarioController.handle)
routes.get('/funcionarios', findAllFuncionariosController.handle)

routes.post('/tipos-equipamento', createTipoEquipamentoController.handle)

export { routes }
