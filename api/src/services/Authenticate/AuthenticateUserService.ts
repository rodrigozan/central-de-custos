import bcrypt from 'bcrypt'
import prismaClient from "../../prisma";

interface iUser {
  id: string;
  email: string;
  password: string;
}

interface iAccessTokenResponse {
  access_token: string;
}

class AuthenticateUserService {
  async execute(email: string, password: string) {
    const user = await prismaClient.user.findUnique({
      where: {
        em_user: email
      }
    })

    try {
      if (user) {
        const auth = await bcrypt.compare(password, user.ps_user)
        return { user, auth }
      }
    } catch (error) { }
  }
}

export { AuthenticateUserService }