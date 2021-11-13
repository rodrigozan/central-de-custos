import prismaClient from "../../prisma";

class DeleteUserService {
  async execute(id_user: number) {
    try {
      const user = await prismaClient.user.delete({
        where: {
          id_user
        }
      })
      return user
    } catch (error) {
      console.log(error)
    }
  }
}

export { DeleteUserService }