import formidable from 'formidable'
import {createTweet} from '@/server/db/tweet';
import {createMediaFile} from '@/server/db/mediaFile'
import {tweetTransformer} from '@/server/transformers/tweet';
import {uploadCloudinary} from '@/utils/cloudinary'


export default defineEventHandler(async(event) => {

    const form = formidable();
    // Parsing Form
    const response = await new Promise((resolve, reject) => {
        form.parse(event.node.req, (err, fields, files) => {
            if(err) {
                reject(err)
            }

            resolve({fields, files})
        })

    });
    const {fields, files} = response;

    // Récupération du userId grâce au context positionné par le middleware auth.js
    const userId = event.context?.auth?.user.id

    // Sauvegarde en BDD
    const tweetData = {
        authorId: userId,
        text: fields.text
    }
    // Sauvegarde du tweet en BDD
    const tweet = await createTweet(tweetData);

    // Sauvegarde du fichier Media en BDD
    const filePromises = Object.keys(files).map(async (key) => {
        const image = files[key];
        const cloudinaryResource = await uploadCloudinary(image.filepath)
        

        return await createMediaFile({
            url: cloudinaryResource.secure_url,
            providerPublicId: cloudinaryResource.public_id,
            userId: userId,
            tweetId: tweet.id
        })
    });

    await Promise.all(filePromises);
    
    
    return {
        tweet: tweetTransformer(tweet)
    }
})