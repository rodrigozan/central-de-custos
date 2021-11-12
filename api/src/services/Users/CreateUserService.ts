import prismaClient from "../../prisma";

class CreateUserService {
  async execute() {
    try {
      const users = await prismaClient.user.create({
        data: {
          nm_user: 'Rodrigo Zandonadi',
          of_user: 'Desenvolvedor Full Stack',
          dp_user: {
            create: {
              nm_department: 'Desenvolvimento',
              department_id: 2
            }
          },
          role: 'ADMIN'
        }
      })
      console.log('usuário criado com sucesso')
    } catch (error) {
      console.log(error)
    }
  }
}

export { CreateUserService }