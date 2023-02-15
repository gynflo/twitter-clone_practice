<script setup>
import {
  ChatIcon,
  RefreshIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/vue/outline";

const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});

function generateRandomNumber() {
  return Number(Math.floor(Math.random() * 100));
}
</script>

<template>
  <div class="flex align-items w-full justify-around">
    <TweetFormItemActionsIcon color="blue">
      <template v-slot:icon="{ classes }">
        <ChatIcon :class="classes" />
      </template>

      <template v-slot:default>{{ props.tweet.repliesCount }}</template>
    </TweetFormItemActionsIcon>

    <TweetFormItemActionsIcon color="green">
      <template v-slot:icon="{ classes }">
        <RefreshIcon :class="classes" />
      </template>

      <template v-slot:default>{{ generateRandomNumber() }}</template>
    </TweetFormItemActionsIcon>

    <TweetFormItemActionsIcon color="red">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>

      <template v-slot:default>{{ generateRandomNumber() }}</template>
    </TweetFormItemActionsIcon>

    <TweetFormItemActionsIcon color="blue">
      <template v-slot:icon="{ classes }">
        <UploadIcon :class="classes" />
      </template>

      <template v-slot:default>{{ generateRandomNumber() }}</template>
    </TweetFormItemActionsIcon>
  </div>
</template>

<style scoped></style>
