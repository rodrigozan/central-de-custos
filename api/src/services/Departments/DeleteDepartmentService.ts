import prismaClient from "../../prisma";

class DeleteDepartmentService {
  async execute(id_department: number) {
    try {
      const department = await prismaClient.department.delete({
        where: {
          id_department
        }
      })
      return department
    } catch (error) {
      return error
    }
  }
}

export { DeleteDepartmentService }