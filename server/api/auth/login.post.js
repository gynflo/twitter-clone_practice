import bcrypt from 'bcrypt';
import {getUserByUsername} from '@/server/db/users'
import {generateTokens,sendRefreshToken} from '@/utils/jwt'
import { userTransformer } from '~~/server/transformers/user';
import {createRefreshToken} from '@/server/db/refreshToken'


export default defineEventHandler(async(event) => {
    const body = await readBody(event);

    const  {username, password} = body;
    if(!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        }));
    }

    // Is the user registered
    const user = await getUserByUsername(username)

    if(!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Something went wrong'
        }));
    }

    // Compare Password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if(!isPasswordMatch) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Username or password does\'t correct !'
        }));
    }
    // Generate Token (jsonwebtoken)
        // => AccessToken
        // => refreshToken
    const {accessToken, refreshToken} = generateTokens(user);

    // Save it inside db
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })
    // Add http only cookie
    sendRefreshToken(event, refreshToken);

    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
});