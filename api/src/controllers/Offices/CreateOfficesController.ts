import { Request, Response } from 'express'
import { CreateOfficesService } from '../../services/Offices/CreateOfficesService'

class CreateOfficesController {
  async handle(req: Request, res: Response) {
    const { nm_office } = req.body

    const service = new CreateOfficesService

    try {
      const result = await service.execute(nm_office)
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { CreateOfficesController }