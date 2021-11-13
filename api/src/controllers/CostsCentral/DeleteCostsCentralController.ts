import { Request, Response } from 'express'
import { DeleteCostsCentralService } from '../../services/CostsCentral/DeleteCostsCentralService'

class DeleteCostsCentralController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const service = new DeleteCostsCentralService

    try {
      const result = await service.execute(Number(id))
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { DeleteCostsCentralController }