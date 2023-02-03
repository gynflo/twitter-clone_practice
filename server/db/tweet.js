import {prisma} from '@/server/db'

export function createTweet(tweetData) {
    return prisma.tweet.create({
        data: tweetData
    })
};


