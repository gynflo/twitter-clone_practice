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
  compact: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["onCommentClick"]);

function generateRandomNumber() {
  return Number(Math.floor(Math.random() * 100));
}

const showStats = computed(() => props.compact);
const size = computed(() => (props.compact ? 5 : 8));
</script>

<template>
  <div class="flex align-items w-full justify-around">
    <TweetItemActionsIcon color="blue" :size="size" @onClick="($event) => emits('onCommentClick')">
      <template v-slot:icon="{ classes }">
        <ChatIcon :class="classes" />
      </template>

      <template  v-slot:default>{{
        props.tweet.repliesCount
      }}</template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <RefreshIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>{{
        generateRandomNumber()
      }}</template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>{{
        generateRandomNumber()
      }}</template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <UploadIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>{{
        generateRandomNumber()
      }}</template>
    </TweetItemActionsIcon>
  </div>
</template>

<style scoped></style>
