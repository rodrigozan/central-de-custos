import { Request, Response } from 'express'
import { DeleteDepartmentService } from '../../services/Departments/DeleteDepartmentService'

class DeleteDepartmentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const service = new DeleteDepartmentService

    try {
      const result = await service.execute(Number(id))
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { DeleteDepartmentController }