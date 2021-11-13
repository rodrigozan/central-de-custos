import { Router } from 'express';

import { ListUsersController, ListUsersByDptController } from './controllers/Users/ListUsersController'
import { CreateUserController } from './controllers/Users/CreateUserController'
import { UpdateUserController } from './controllers/Users/UpdateUserController'
import { DeleteUserController } from './controllers/Users/DeleteUserController'

import { CreateOfficesController } from './controllers/Offices/CreateOfficesController'

import { ListDepartmentsController, ListDepartmentsByDptController } from './controllers/Departments/ListDepartmentsController'
import { CreateDepartmentController } from './controllers/Departments/CreateDepartmentController'
import { UpdateDepartmentController } from './controllers/Departments/UpdateDepartmentController'
import { DeleteDepartmentController } from './controllers/Departments/DeleteDepartmentController'

import { CreateCostsCentralController } from './controllers/CostsCentral/CreateCostsCentralController'
import { UpdateCostsCentralController } from './controllers/CostsCentral/UpdateCostsCentralController'
import { DeleteCostsCentralController } from './controllers/CostsCentral/DeleteCostsCentralController'

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

// Create cost
router.post('/offices', new CreateOfficesController().handle)

/* */

/* Endpoints to departments */

// List all departments
router.get('/departments', new ListDepartmentsController().handle)
// List all departments by Costs Central
router.get('/departments/costs-central/:id', new ListDepartmentsByDptController().handle)
// Create department
router.post('/departments', new CreateDepartmentController().handle)
// Update department
router.put('/departments/:id', new UpdateDepartmentController().handle)
// Delete department
router.delete('/departments/:id', new DeleteDepartmentController().handle)

/* */

/* Endpoints to costs-central */

// Create cost
router.post('/costs-central', new CreateCostsCentralController().handle)
// Update cost
router.put('/costs-central/:id', new UpdateCostsCentralController().handle)
// Delete cost
router.delete('/costs-central/:id', new DeleteCostsCentralController().handle)

/* */

export { router }