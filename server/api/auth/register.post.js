export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const {name, username, password, repeatPassword, email} = body

    if(!name || !username || !password || !repeatPassword || !email) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Invalid Params'}))
    }

    return { 
        body: body
    }
})