import jwtDecode from 'jwt-decode';


export default () => {
    const BASE_URL = '/api/auth'

    // Sauvegarde du state local 
    const useAuthToken = () => useState('auth_token');
    const useAuthUser = () => useState('auth_user');
    const useAuthLoading = () => useState('auth_loading', () => true
    );

    //Actions
    const setToken = (newToken) => {
        const authToken = useAuthToken();
        authToken.value = newToken
    }
    const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser;
    }

     const setIsAuthLoading = (value) => {
        const authLoading = useAuthLoading();
        authLoading.value = value;
    }

  

    //Logique
    const login = ({username, password}) => {
        return new Promise(async (resolve,reject) => {
            try {
                const data = await $fetch(`${BASE_URL}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: {
                        username,
                        password
                    }

                });
        
                setToken(data.access_token);
                setUser(data.user)
                resolve(true);
            } catch (error) {
                reject(error)
            }
        })
    };

    const refreshToken = () => {
        return new Promise(async(resolve,reject) => {
            try {
                const data = await $fetch(`${BASE_URL}/refresh`);
                setToken(data.accessToken)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const getUser = () => {
        return new Promise(async(resolve,reject) => {
            try {
                const data = await useFetchApi(`${BASE_URL}/user`);
                setUser(data.user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const reRefreshAccessToken = () => {
        const authToken = useAuthToken();
        if(!authToken.value) {
            return
        }

        const jwt = jwtDecode(authToken.value)
        
        const newRefreshTime = jwt.exp - 60000;

        setTimeout(async () => {
            await refreshToken();
            reRefreshAccessToken();
        }, newRefreshTime)
    }

    const initAuth = () => {
        return new Promise(async(resolve,reject) => {
            setIsAuthLoading(true);
            try {
                    await refreshToken();
                    await getUser();
                    reRefreshAccessToken();

                resolve(true)
            } catch (error) {
                reject(error)
            } finally {
                 setIsAuthLoading(false);
            }
        })
    }


        
    return {
        login,
        useAuthToken,
        useAuthUser,
        useAuthLoading,
        initAuth
    }
}