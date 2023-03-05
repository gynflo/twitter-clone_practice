<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});
const replyToTweetUrl = computed(() => `/status/${props.tweet.replyTo.id}`);
</script>

<template>
  <div class="p-4 flex">
    <div>
      <img
        class="w-10 h-10 rounded-full"
        :src="tweet?.author?.profileImage"
        :alt="`image-${tweet.author.username}`"
      />
    </div>

    <div class="ml-3">
      <span class="font-medium text-gray-800 dark:text-white">
        {{ props.tweet.author.name }}
      </span>

      <span class="ml-3 text-sm font-medium text-gray-400">
        <nuxt-link to="#">{{ props.tweet.author.handle }}</nuxt-link>
        {{ props.tweet.postedAtHuman }}
      </span>

      <p v-if="props.tweet.replyTo" class="text-sm">
        <span class="text-gray-500 mr-1">Replying to</span>
        <NuxtLink :to="replyToTweetUrl" class="text-blue-400">
          {{ props.tweet.replyTo.author.handle }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
