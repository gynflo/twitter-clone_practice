## Définition & Création Tweet

### Backend
1.Création du model de tweet:
    -Définition de l'ID
    -Définition du text
    -Définition des champs createAt & updatedAt
    -Liason du tweet à son auteur.
    ```
    author User @relation(fields: [authorId], references: [id])
    authorId String @db.ObjectId
    ```
    -tweets Tweet[] sur le model User 
    -Définition des réponses sur le tweet
    ```
    replyToId String? @db.ObjectId
    replies Tweet[] @relation("replies")
    replyTo Tweet? @relation("replies", fields: [replyToId], references: [id], onDelete: NoAction, onUpdate: NoAction)
    ```

    Une fois la définition du model terminée, on migre le model
    ```
        npx prisma db push
    ```

2. Création du model MediaFile
    -Définition de l'ID
    -Définition de URL
    -Définition de providerPublicId
    -Définition des timestamps (CU)
    -Définition des relations avec User & Tweet


3.Définition de la route /api/user/tweets
    -Envoie des données sous multipart/form
    -Installation du package formidable (multipart-parser)
    -Je form.parse() la requete reçue
    -Je récupère l'id sur le context
    -Je sauvegarde mon tweet sur la BDD
