import prismaClient from "../../prisma";

class CreateCostsCentralService {
  async execute(nm_costs_central: string) {
    try {
      const costsCentral = await prismaClient.costsCentral.create({
        data: {
          nm_costs_central
        }
      })
      return costsCentral
    } catch (error) {
      console.log(error)
    }
  }
}

export { CreateCostsCentralService }