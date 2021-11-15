import { Request, Response } from 'express'

import { AuthenticateUserService } from '../../services/Auth/AuthenticateUserService'

class AuthenticateController {
  async handle(req: Request, res: Response) {
    const { em_user, ps_user } = req.body

    const service = new AuthenticateUserService

    try {
      const result = await service.execute(em_user, ps_user)
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { AuthenticateController }