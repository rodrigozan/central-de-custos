import prismaClient from "../../prisma";

class CreateUserService {
  async execute(nm_user: string, office_id: number, department_id: number) {
    try {
      const user = await prismaClient.user.create({
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

export { CreateUserService }