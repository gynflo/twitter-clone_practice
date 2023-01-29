import { getUserById } from "~~/server/db/users";
import {useFetchApi} from '@/composables/useFetchApi'

export default () => {

    //State
    const useAuthToken = () => useState('auth_token');
    const useAuthUser = () => useState('auth_user');

    const setToken = (newToken) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }

    const login =  ({username, password}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data} = await useFetch('/api/auth/login', {
                    method: 'POST',
                    body: {
                        username,
                        password
                    }
                })

               
                

                setToken(data.value.access_token);
                setUser(data.value.user);
                resolve(true)
                
            } catch (error) {
                reject(error)
            }
        })
    }

    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
            const data = await useFetch('/api/auth/refresh');
            
            setToken(data.access_token);
            resolve(true)
        } catch (error) {
            reject(error)
        }
        })
    }

    const getUser = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await useFetchApi('/api/auth/user');
                console.log("🚀 ~ file: useAuth.js:61 ~ returnnewPromise ~ data", data.user)
                setUser(data.user);
                resolve(true)
        } catch (error) {
            reject(error)
        }
        })
    }

    const initAuth = () => {
        return new Promise(async (resolve,reject) => {
            try {
                await refreshToken();
                await getUser();
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    } 



    return {
        login,
        useAuthUser,
        initAuth,
        useAuthToken
    }
}