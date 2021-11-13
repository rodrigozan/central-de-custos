import { Router } from 'express';

import { ListUsersController, ListUsersByDptController } from './controllers/Users/ListUsersController'
import { CreateUserController } from './controllers/Users/CreateUserController'
import { UpdateUserController } from './controllers/Users/UpdateUserController'
import { DeleteUserController } from './controllers/Users/DeleteUserController'

import { ListDepartmentsController, ListDepartmentsByDptController } from './controllers/Departments/ListDepartmentsController'

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

/* Endpoints to departments */

// List all departments
router.get('/departments', new ListDepartmentsController().handle)
// List all departments by Costs Central
router.get('/departments/costs-central/:id', new ListDepartmentsByDptController().handle)
// Create department
router.post('/departments', new ListDepartmentsController().handle)
// Update department
router.put('/departments/:id', new ListDepartmentsController().handle)
// Delete department
router.delete('/departments/:id', new ListDepartmentsController().handle)

// Endpoints to costs-central
router.get('/costs', (req, res, next) => res.send("Entrou na rota de custos"))

export { router }