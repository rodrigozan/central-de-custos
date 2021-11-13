import prismaClient from "../../prisma";

class CreateOfficesService {
  async execute(nm_office: string) {
    try {
      const offices = await prismaClient.office.create({
        data: {
          nm_office
        }
      })
      return offices
    } catch (error) {
      console.log(error)
    }
  }
}

export { CreateOfficesService }