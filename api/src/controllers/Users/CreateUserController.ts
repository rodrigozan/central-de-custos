import { Request, Response } from 'express'
import { CreateUserService } from '../../services/Users/CreateUserService'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const service = new CreateUserService

    try {
      const result = await service.execute()
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}