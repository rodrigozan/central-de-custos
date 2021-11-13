import { Request, Response } from 'express'
import { CreateCostsCentralService } from '../../services/CostsCentral/CreateCostsCentralService'

class CreateCostsCentralController {
  async handle(req: Request, res: Response) {
    const { nm_costs_central } = req.body

    const service = new CreateCostsCentralService

    try {
      const result = await service.execute(nm_costs_central)
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

export { CreateCostsCentralController }