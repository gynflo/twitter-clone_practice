import jwt from 'jsonwebtoken';


function generateAccessToken(user) {
const config = useRuntimeConfig();

    return jwt.sign({userId:user.id},config.jwtAccessSecret, {expiresIn: '10min'})
};

function generateRefreshToken(user) {
const config = useRuntimeConfig();

    return jwt.sign({userId: user.id}, config.jwtRefreshSecret, {expiresIn: '4h'})
};

export function generateTokens(user) {
const accessToken = generateAccessToken(user);
const refreshToken = generateRefreshToken(user);

    return {
        accessToken,
        refreshToken
    }
}

export function sendRefreshToken(event, token){
    setCookie(event, "refresh_token", token, {
        httpOnly: true,
        sameSite: true
    })
}