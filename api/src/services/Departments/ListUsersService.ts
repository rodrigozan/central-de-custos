import prismaClient from "../../prisma";

class ListDepartmentService {
  async execute() {
    try {
      const departments = await prismaClient.department.findFirst()
      return departments
    } catch (error) {
      console.log(error)
    }
  }
}

class ListDepartmentByCc {
  async execute(dpto_id: number) {
    try {
      const users = await prismaClient.department.findMany({
        where: {}
      })
      return users
    } catch (error) {
      console.log(error)
    }
  }
}

export { ListDepartmentService, ListDepartmentByCc }