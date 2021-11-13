import prismaClient from "../../prisma";

class ListUsersService {
  async execute() {
    try {
      const users = await prismaClient.user.findMany()
      return users
    } catch (error) {
      console.log(error)
    }
  }
}

class ListUsersByDptoService {
  async execute(dpto_id: number) {
    try {
      const users = await prismaClient.user.findMany({
        where: {
          department_id: dpto_id
        }
      })
      return users
    } catch (error) {
      console.log(error)
    }
  }
}

export { ListUsersService, ListUsersByDptoService }