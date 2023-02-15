
export default () => {

    // Create Tweets
    function createTweet(formData) {
        
        const form = new FormData();

        form.append('text', formData.text);
        formData.mediaFiles.forEach((media,index) => {
            form.append('media_files_' + index, media);
        })

        return useFetchApi('/api/user/tweets', {
            method: "POST",
            body: form
        })
    };

    // Read Tweets
    function getHomeTWeets() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi('/api/tweets', {
                    method: 'GET'
                });
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    } 

   

    return {
        createTweet,
        getHomeTWeets
    };
};

