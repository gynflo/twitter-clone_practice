<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
});

const replies = computed(() => props.tweet?.replies || []);

function handleFormSuccess(tweet) {
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}
</script>

<template>
  <div>
    <TweetItem :tweet="props.tweet" />
    <TweetForm
      placeholder="Tweet your reply"
      :user="user"
      :replyTo="props.tweet"
      @onSucccess="handleFormSuccess"
    />
    <TweetListFeed :tweets="replies" />
  </div>
</template>

<style scoped></style>
