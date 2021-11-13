import { Request, Response } from 'express'
import { DeleteUserService } from '../../services/Users/DeleteUserService'

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const service = new DeleteUserService

    try {
      const result = await service.execute(Number(id))
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { DeleteUserController }