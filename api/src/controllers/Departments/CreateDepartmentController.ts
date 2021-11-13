import { Request, Response } from 'express'
import { CreateDepartmentService } from '../../services/Departments/CreateDepartmentService'

class CreateDepartmentController {
  async handle(req: Request, res: Response) {
    const { nm_department, costs_central_id } = req.body

    const service = new CreateDepartmentService

    try {
      const result = await service.execute(nm_department, costs_central_id)
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { CreateDepartmentController }