export function tweetTransformer(tweet) {
    return {
        id: tweet.id,
        text: tweet.text
    }
}