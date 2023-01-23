import { createUser } from "~~/server/db/users";
import { userTransformer } from "~~/server/transformers/user";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const {name, username, password, repeatPassword, email} = body

    if(!name || !username || !password || !repeatPassword || !email) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Invalid Params'}))
    }

    if(password !== repeatPassword) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Password doesn\'t match'}))
    }

    const userData = {name,username, password, email, profileImage: 'https://picsum.photos/200/200'}

    const user = await createUser(userData);


    return { 
        body: userTransformer(user)
    }
});