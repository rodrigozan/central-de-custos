import { Request, Response } from 'express'
import { CreateUserService } from '../../services/Users/CreateUserService'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { nm_user, em_user, ps_user, office_id, department_id } = req.body

    const service = new CreateUserService

    try {
      const result = await service.execute(nm_user, em_user, ps_user, office_id, department_id)
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { CreateUserController }