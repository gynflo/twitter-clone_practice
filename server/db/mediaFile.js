import {prisma} from '@/server/db'

export function createMediaFile(mediaFile) {
    return prisma.mediaFile.create({
        data: mediaFile
    })
};