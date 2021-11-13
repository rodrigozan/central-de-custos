import { Request, Response } from 'express'

import { ListDepartmentsService, ListDepartmentByCc } from '../../services/Departments/ListDepartmentsService'

class ListDepartmentsController {
  async handle(req: Request, res: Response) {

    const service = new ListDepartmentsService()

    try {
      const result = await service.execute()
      return res.status(200).json({ message: 'Listagem bem sucedida', data: result })
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

class ListDepartmentsByDptController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const service = new ListDepartmentByCc()

    try {
      const result = await service.execute(Number(id))
      return res.status(200).json({ message: 'Listagem bem sucedida', data: result })
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { ListDepartmentsController, ListDepartmentsByDptController }