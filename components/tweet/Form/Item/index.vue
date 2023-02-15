<script setup>
const { twitterBorderColor } = useTailwindConfig();

const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="ml-16">
      <p class="flex-shrink w-auto font-medium text-gray-800 dark:text-white">
        <TweetFormItemHeader :tweet="props.tweet" />
      </p>

      <div
        v-for="image in tweet.mediaFiles"
        :key="image.id"
        class="flex my-3 mr-2 border-2 rounded-2xl"
      >
        <img
          :src="image.url"
          alt="image"
          class="w-full rounded-2xl"
          :class="twitterBorderColor"
        />
      </div>

      <div class="mt-2">
        <TweetFormItemActions :tweet="props.tweet" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
