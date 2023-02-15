import UrlPattern from 'url-pattern';
import {decodeAccessToken} from '@/utils/jwt'
import { getUserById } from '../db/users';

export default defineEventHandler(async (event) => {
    const endpoints = ['/api/auth/user', '/api/user/tweets', '/api/tweets'];

    const isHandledByThisMiddleware = endpoints.some(endpoint => {
        const pattern = new UrlPattern(endpoint);

        return pattern.match(event.node.req.url)
    })

    if(!isHandledByThisMiddleware) {
        return;
    }

    const token = event.node.req.headers['authorization']?.split(' ')[1];

    if(!token) {
        return sendError(event, createError({
            statusCode:401,
            statusMessage: 'Token not found'
        }))
    }
    
    const decodedToken = decodeAccessToken(token)
    

    if(!decodedToken) {
        return sendError(event, createError({
            statusCode:401,
            statusMessage: 'Unauthorized'
        }))
    }


    try {
    const userId = decodedToken.userId;
    const user = await getUserById(userId);
    

    event.context.auth = { user };
    } catch (error) {
        return 
    }


})