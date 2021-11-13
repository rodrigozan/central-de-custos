import { Request, Response } from 'express'
import { UpdateUserService } from '../../services/Users/UpdateUserService'

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const { nm_user, office_id, department_id } = req.body

    const service = new UpdateUserService

    try {
      const result = await service.execute(Number(id), nm_user, office_id, department_id)
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { UpdateUserController }