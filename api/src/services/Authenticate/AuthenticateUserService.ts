import bcrypt from 'bcrypt'
import prismaClient from "../../prisma";

class AuthenticateUserService {
  async execute(email: string, password: string) {
    const user = await prismaClient.user.findUnique({
      where: {
        em_user: email
      }
    })

    try {
      const auth = await bcrypt.compare(password, user.ps_user)
      if (auth === true) {
        return { user, auth }
      }
    } catch (error) { }
  }
}

export { AuthenticateUserService }