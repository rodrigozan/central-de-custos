import prismaClient from "../../prisma";

class CreateDepartmentService {
  async execute(nm_user: string, of_user: string, department_id: number) {
    try {
      const user = await prismaClient.user.create({
        data: {
          nm_user,
          of_user,
          department_id
        }
      })
      return user
    } catch (error) {
      console.log(error)
    }
  }
}

export { CreateDepartmentService }