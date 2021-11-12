import { Router } from 'express';

const router = Router()

// Endpoints to users
router.get('/users', (req, res, next) => res.send("Entrou na rota de usuários"))

// Endpoints to offices
router.get('/offices', (req, res, next) => res.send("Entrou na rota de cargos"))

// Endpoints to departments
router.get('/departments', (req, res, next) => res.send("Entrou na rota de departamentos"))

// Endpoints to costs-central
router.get('/costs', (req, res, next) => res.send("Entrou na rota de custos"))

export { router }