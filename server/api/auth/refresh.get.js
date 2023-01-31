import {getRefreshTokenByToken} from '@/server/db/refreshToken';
import {getUserById} from '@/server/db/users';
import {decodeRefreshToken, generateTokens} from '@/utils/jwt'


export default defineEventHandler(async (event) => {

    const refreshTokenCookie = getCookie(event, "refresh_token")
    if(!refreshTokenCookie) {
        return sendError(event, createError({
            statusMessage: 'Refresh token is invalid',
            statusCode: 401  
        }))
    }

    // Vérification si présent dans la bdd
    const rToken = await getRefreshTokenByToken(refreshTokenCookie);
    if(!rToken) {
        return sendError(event, createError({
            statusMessage: 'Refresh token is invalid',
            statusCode: 401  
        }))
    }

    //Vérification du token 
    const token = decodeRefreshToken(rToken.token)

    try {
        const user = await getUserById(token.userId);
        const {accessToken} =  generateTokens(user)
        return {
            accessToken:accessToken
        }
    } catch (error) {
        return sendError(event, createError({
            statusMessage: 'Something went wrong',
            statusCode: 500  
        }))
    } 
})