import prismaClient from "../../prisma";

class ListDepartmentsService {
  async execute() {
    try {
      const departments = await prismaClient.department.findMany()
      return departments
    } catch (error) {
      console.log(error)
    }
  }
}

class ListDepartmentByCc {
  async execute(cc_id: number) {
    try {
      const users = await prismaClient.department.findMany({
        where: {
          costs_central_id: cc_id
        }
      })
      return users
    } catch (error) {
      console.log(error)
    }
  }
}

export { ListDepartmentsService, ListDepartmentByCc }