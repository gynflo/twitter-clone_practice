<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();
const isEmptyArrayTweets = computed(() => props.tweets.length === 0);
function redirectTo(id) {
  navigateTo(`/status/${id}`);
}
const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div v-if="isEmptyArrayTweets" class="py-4">
    <p class="text-center text-gray-500">No Tweets 😓</p>
  </div>
  <div v-else>
    <div
      v-for="tweet of props.tweets"
      :key="tweet.id"
      class="pb-4 border-b hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-dim-300"
      :class="[twitterBorderColor, defaultTransition]"
      @click.native="$event => redirectTo(tweet.id)"
    >
      <TweetItem :tweet="tweet" compact />
    </div>
  </div>
</template>

<style scoped></style>
