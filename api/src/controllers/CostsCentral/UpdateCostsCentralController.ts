import { Request, Response } from 'express'
import { UpdateCostsCentralService } from '../../services/CostsCentral/UpdateCostsCentralService'

class UpdateCostsCentralController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const { nm_costs_central } = req.body

    const service = new UpdateCostsCentralService

    try {
      const result = await service.execute(Number(id), nm_costs_central)
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { UpdateCostsCentralController }