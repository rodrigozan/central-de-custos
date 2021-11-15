import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken';
import 'dotenv/config'

import prismaClient from "../../prisma";

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
        if (auth === true) {
          const token = sign({
            user: {
              name: user.nm_user,
              id: user.id_user
            }
          },
            process.env.JWT_SECRET,
            {
              expiresIn: 60
            }
          )
          return { token, user }
        }
      }
    } catch (error) {
      console.log({ message: error.message })
    }
  }
}

export { AuthenticateUserService }