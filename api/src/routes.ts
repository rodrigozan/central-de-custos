import { Router } from 'express';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

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

import { AuthenticateController } from './controllers/Auth/AuthenticateController'

const router = Router()

/* Endpoints to users */

// List all users
router.get('/users', ensureAuthenticated, new ListUsersController().handle)
// List all users by Department
router.get('/users/department/:id', ensureAuthenticated, new ListUsersByDptController().handle)
// Create user
router.post('/users', ensureAuthenticated, new CreateUserController().handle)
// Update user
router.put('/users/:id', ensureAuthenticated, new UpdateUserController().handle)
// Delete user
router.delete('/users/:id', ensureAuthenticated, new DeleteUserController().handle)

/* */

/* Endpoints to offices */

// Create cost
router.post('/offices', ensureAuthenticated, new CreateOfficesController().handle)

/* */

/* Endpoints to departments */

// List all departments
router.get('/departments', ensureAuthenticated, new ListDepartmentsController().handle)
// List all departments by Costs Central
router.get('/departments/costs-central/:id', ensureAuthenticated, new ListDepartmentsByDptController().handle)
// Create department
router.post('/departments', ensureAuthenticated, new CreateDepartmentController().handle)
// Update department
router.put('/departments/:id', ensureAuthenticated, new UpdateDepartmentController().handle)
// Delete department
router.delete('/departments/:id', ensureAuthenticated, new DeleteDepartmentController().handle)

/* */

/* Endpoints to costs-central */

// Create cost
router.post('/costs-central', ensureAuthenticated, new CreateCostsCentralController().handle)
// Update cost
router.put('/costs-central/:id', ensureAuthenticated, new UpdateCostsCentralController().handle)
// Delete cost
router.delete('/costs-central/:id', ensureAuthenticated, new DeleteCostsCentralController().handle)

/* */

/* Endpoints to authenticate */

// Login
router.post('/authenticate', new AuthenticateController().handle)

/* */

export { router }