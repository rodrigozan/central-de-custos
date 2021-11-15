import prismaClient from "../../prisma";
import bcrypt from "bcrypt"

class CreateUserService {
  async execute(nm_user: string, em_user: string, pass: string, office_id: number, department_id: number) {
    try {
      const ps_user = bcrypt.hashSync(pass, 10)
      const user = await prismaClient.user.create({
        data: {
          nm_user,
          em_user,
          ps_user,
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