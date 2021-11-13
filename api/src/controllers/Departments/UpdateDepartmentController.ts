import { Request, Response } from 'express'
import { UpdateDepartmentService } from '../../services/Departments/UpdateDepartmentService'

class UpdateDepartmentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const { nm_department, costs_central_id } = req.body

    const service = new UpdateDepartmentService

    try {
      const result = await service.execute(Number(id), nm_department, costs_central_id)
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { UpdateDepartmentController }