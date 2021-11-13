import prismaClient from "../../prisma";

class DeleteCostsCentralService {
  async execute(id_costs_central: number) {
    try {
      const costsCentral = await prismaClient.costsCentral.delete({
        where: {
          id_costs_central
        }
      })
      return costsCentral
    } catch (error) {
      console.log(error)
    }
  }
}

export { DeleteCostsCentralService }