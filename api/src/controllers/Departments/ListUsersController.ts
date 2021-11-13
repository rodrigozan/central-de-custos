import { Request, Response } from 'express'

import { ListUsersService, ListUsersByDptoService } from '../../services/Users/ListUsersService'

class ListUsersController {
  async handle(req: Request, res: Response) {

    const service = new ListUsersService()

    try {
      const result = await service.execute()
      return res.status(200).json({ message: 'Listagem bem sucedida', data: result })
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

class ListUsersByDptController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const service = new ListUsersByDptoService()

    try {
      const result = await service.execute(Number(id))
      return res.status(200).json({ message: 'Listagem bem sucedida', data: result })
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { ListUsersController, ListUsersByDptController }