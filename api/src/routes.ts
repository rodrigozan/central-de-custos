import { Router } from 'express';

import { ListUsersController, ListUsersByDptController } from './controllers/Users/ListUsersController'
import { CreateUserController } from './controllers/Users/CreateUserController'
import { UpdateUserController } from './controllers/Users/UpdateUserController'
import { DeleteUserController } from './controllers/Users/DeleteUserController'

const router = Router()

/* Endpoints to users */

// List all users
router.get('/users', new ListUsersController().handle)
// List all users by Department
router.get('/users/department/:id', new ListUsersByDptController().handle)
// Create user
router.post('/users', new CreateUserController().handle)
// Update user
router.put('/users/:id', new UpdateUserController().handle)
// Delete user
router.delete('/users/:id', new DeleteUserController().handle)

/* */

/* Endpoints to offices */
router.get('/offices', (req, res, next) => res.send("Entrou na rota de cargos"))

// Endpoints to departments
router.get('/departments', (req, res, next) => res.send("Entrou na rota de departamentos"))

// Endpoints to costs-central
router.get('/costs', (req, res, next) => res.send("Entrou na rota de custos"))

export { router }