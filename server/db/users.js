import {prisma} from '@/server/db'
import bcrypt from 'bcrypt';


export const createUser = (userData) => {
      const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
      }
    

    return prisma.user.create({
        data: finalUserData
    })
}

export function getUserByUsername(username) {
    return prisma.user.findUnique({
        where: {
            username
        }
    })
}

export async function getUserById(id) {
    return prisma.user.findUnique({
        where: {
            id
        }
    })
}