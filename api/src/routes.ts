import { Router } from 'express';

import { ListUsersController, ListUsersByDptController } from './controllers/Users/ListUsersController'
import { CreateUserController } from './controllers/Users/CreateUserController'

const router = Router()

// Endpoints to users
router.get('/users', new ListUsersController().handle)
router.get('/users/department/:id', new ListUsersByDptController().handle)
router.post('/users', new CreateUserController().handle)

// Endpoints to offices
router.get('/offices', (req, res, next) => res.send("Entrou na rota de cargos"))

// Endpoints to departments
router.get('/departments', (req, res, next) => res.send("Entrou na rota de departamentos"))

// Endpoints to costs-central
router.get('/costs', (req, res, next) => res.send("Entrou na rota de custos"))

export { router }