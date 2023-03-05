import {prisma} from '@/server/db'

export function createTweet(tweetData) {
    return prisma.tweet.create({
        data: tweetData
    })
};

export function getTweets(params = {}) {
    return prisma.tweet.findMany({
        ...params
    });
}

export function getTweetById(tweetId, params = {}) {
    return prisma.tweet.findUnique({
        ...params,
        where: {
            ...params.where,
            id: tweetId,
            
        }
    })
};


