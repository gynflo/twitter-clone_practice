
export default () => {

   const usePostTweetModal = () => useState('post_tweet_modal', () => false);
   const useReplyTweet = () => useState('reply_tweet', () => null);

    // Create Tweets
    function createTweet(formData) {
        
        const form = new FormData();

        form.append('text', formData.text);
        form.append('replyTo', formData.replyTo);
        
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

    //Read Tweet by ID
    function getTweetById(tweetId) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi(`/api/tweets/${tweetId}`, {
                    method: 'GET'
                });
                resolve(response);
            } catch (error) {
                reject(error);
            }
        })
    }

    const setReplyTo = (tweet) => {
        const replyTweet = useReplyTweet()
        replyTweet.value = tweet
    }

    function openPostTweetModal(tweet = null) {
        const postTweetModal = usePostTweetModal();
        postTweetModal.value = true;
        setReplyTo(tweet)
    }

    function closePostTweeModal() {
        const postTweetModal = usePostTweetModal();
        postTweetModal.value = false;
    }
   

    return {
        createTweet,
        getHomeTWeets,
        getTweetById,
        closePostTweeModal,
        openPostTweetModal,
        usePostTweetModal,
        useReplyTweet
    };
};

