import prismaClient from "../../prisma";

class ListUsersService {
  async execute(conditions: {}) {
    try {
      const users = await prismaClient.user.findMany(conditions)
      return users
    } catch (error) {
      console.log(error)
    }
  }
}

export { ListUsersService }