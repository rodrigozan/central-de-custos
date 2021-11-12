import prismaClient from "../../prisma";

class GetUserService {
  async execute() {
    try {
      const users = await prismaClient.user.findMany()
      console.log(users)
    } catch (error) {
      console.log(error)
    }
  }
}

export { GetUserService }