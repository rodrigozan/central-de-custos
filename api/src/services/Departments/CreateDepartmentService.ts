import prismaClient from "../../prisma";

class CreateDepartmentService {
  async execute(nm_department: string, costs_central_id: number) {
    try {
      const department = await prismaClient.department.create({
        data: {
          nm_department,
          costs_central_id
        }
      })
      return department
    } catch (error) {
      console.log(error)
    }
  }
}

export { CreateDepartmentService }