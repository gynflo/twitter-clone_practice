
export default () => {

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

    return {
        createTweet
    };
};

