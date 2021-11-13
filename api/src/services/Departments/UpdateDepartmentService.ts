import prismaClient from "../../prisma";

class UpdateDepartmentService {
  async execute(id_department: number, nm_department: string, costs_central_id: number) {
    try {
      const department = await prismaClient.department.update({
        where: {
          id_department
        },
        data: {
          nm_department,
          costs_central_id
        }
      })
      return department
    } catch (error) {
      return error
    }
  }
}

export { UpdateDepartmentService }