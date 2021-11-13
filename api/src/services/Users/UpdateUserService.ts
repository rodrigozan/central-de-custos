import prismaClient from "../../prisma";

class UpdateUserService {
  async execute(id_user: number, nm_user: string, office_id: number, department_id: number) {
    try {
      const user = await prismaClient.user.update({
        where: {
          id_user
        },
        data: {
          nm_user,
          office_id,
          department_id
        }
      })
      return user
    } catch (error) {
      console.log(error)
    }
  }
}

export { UpdateUserService }