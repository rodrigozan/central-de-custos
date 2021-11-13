import { Request, Response } from 'express'

import { ListUsersService } from '../../services/Users/ListUsersService'

class ListUsersController {
  async handle(req: Request, res: Response) {

    const service = new ListUsersService()

    try {
      const result = await service.execute({})
      return res.status(200).json({ message: 'Listagem bem sucedida', data: result })
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

class ListUsersByDptController {
  async handle(req: Request, res: Response) {
    const { dpto_id } = req.params

    const service = new ListUsersService()

    try {
      const result = await service.execute({
        where: {
          department_id: dpto_id
        }
      })
      return res.status(200).json({ message: 'Listagem bem sucedida', data: result })
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { ListUsersController, ListUsersByDptController }