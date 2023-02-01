## Authentification LOGIN

### Form.vue

Le formulaire submit la fonction login importée du composable UserAuth qui prends en parametre un objet comportant deux propriétés {username & password}.

### UseAuth

La fonction login retourne une prommesse resolve(true)
un fetch (POST) envoie le username & password à l'API==> /api/auth/login
et renvoie {user, access_token} dans une constante data

Nous initialisons un state du nom de 'auth_token' et de 'user'

```js
const useAuthToken = () => useState("auth_token");
const useAuthUser = () => useState("auth_user");
```

Ainsi, grâce aux setters,

```js
setUser(newUser){
    const authUser = useAuthUser();
    authUser.value = newUser
};
setToken(newToken){
    const authToken = useAuthToken();
    authToken.value = newToken
};
```

Nous sauvegardons dans ces states , le token et le user renvoyé par l API /api/auth/login 

```js
setToken(data.access_token);
setUser(data.user);
```

### API

Endpoint /api/auth/login

Grâce à la décomposition, j'extrais les propriétés username & password de body.
Je teste l'existence de ces derniers avant de faire quoi que se soit.

Je récupere sur la base de donnée l'user

```js
const user = await getUsername(username);
```

Je teste l'existence du user, si ok , je compare les mots de passe

```js
const isPasswordMatch = await bcrypt.compare(password, user.password);
```

Si le mot de passe correspond, je genere les deux token (accessToken & refreshToken) avec jsonwebtoken

```js
const { accessToken, refreshToken } = generateTokens(user);
```

Je sauvegarde sur la collection refreshToken le token et userId

```js
await createRefreshToken({
  token: refreshToken,
  userId: user.id,
});
```

Je crée un cookie refresh_token afin d'y mettre le token (refreshToken)

Enfin l'API sur l'endpoint => /api/auth/login renvoie {access_token, user}

### Database (Prisma & MongoDB)

Récupère l'utilisateur sur la BDD
```js
export function getUserByUsername(username) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
}
```

Créé un document sur la collection refreshToken
```js
export const createRefreshToken = (refreshToken) => {
  return prisma.refreshToken.create({
    data: refreshToken,
  });
};
```
