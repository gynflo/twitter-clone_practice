La fonction init()est appelée avant chaque construction du DOM 

Cette fonction execute  

    1.refreshToken() => Fait appel à l'API => /api/auth/refresh
                        Elle récupère le token sur le cookie "refreshToken"
                        Si présent, on le récupère sur la BDD
                        Si connu, je le jwtVerify avec le secret jwtRefreshToken
                        Si tout est ok 
                        Je récupère le user sur la bdd grace à token.userId
                        Je génère et return  accessToken

    2.getUser()      => Fait appel à l'API /api/auth/user
                        Positionne le token sur le headers.authorization
                        récupère le user sur le context 
                        return user qu'on sauvegarde setUser(data.user)

    3.reRefreshAccesToken() => Récupère le token sauvegardé dans le state
                               Décode le token
                               Mets une expiration au token 



    /!\ Un middleware est positionné sur la route /api/auth/user

        Récupere le token positionner sur le headers.authorization
        Si token , jwtVerify le token 
        Récupere en BDD , le user grâce à tokenVerify.userId
        Si ok , positionne le user =>  event.context.auth.user
                    
                    
