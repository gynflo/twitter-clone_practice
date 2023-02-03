import { v2 as _cloudinary} from'cloudinary';

function cloudinary() {
    const config = useRuntimeConfig();
        //config
        _cloudinary.config({
            cloud_name: config.cloudinaryCloudName,
            api_key: config.cloudinaryApiKey,
            api_secret: config.cloudinaryApiSecret
        });

        return _cloudinary;
}

export function uploadCloudinary (image) {
    return new Promise((resolve, reject) => {
        //Upload
        cloudinary().uploader.upload(image, (err, data) => {
            if(err) {
                reject(err)
            }

            resolve(data)
        })
    })
}