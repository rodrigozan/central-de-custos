import prismaClient from "../prisma";

class UserService {
  async execute() {
    try {
      const users = await prismaClient.user.findMany()
      console.log(users)
    } catch (error) {
      console.log(error)
    }
  }
}

export { UserService }