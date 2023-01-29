import {prisma} from '@/server/db'
import bcrypt from 'bcrypt';

//
export const createUser = async (userData) => {
      const finalUserData = {
        ...userData,
        password: await bcrypt.hash(userData.password, 10)
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

export function getUserById(userId) {
    
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}

