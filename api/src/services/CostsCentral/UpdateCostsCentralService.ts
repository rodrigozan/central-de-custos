import prismaClient from "../../prisma";

class UpdateCostsCentralService {
  async execute(id_costs_central: number, nm_costs_central: string) {
    try {
      const costsCentral = await prismaClient.costsCentral.update({
        where: {
          id_costs_central
        },
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

export { UpdateCostsCentralService }