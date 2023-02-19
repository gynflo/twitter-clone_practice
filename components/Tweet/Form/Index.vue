<script setup>
const { createTweet } = useTweets();
const loading = ref(false);
const emits = defineEmits(["onSucccess"]);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
  },
  replyTo: {
    type: Object,
    default: null,
  },
});

async function handleFormSubmit(data) {
  loading.value = true;
  try {
    const response = await createTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id,
    });

    emits("onSucccess", response.tweet);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div v-else>
      <TweetFormInput
        :user="props.user"
        @on-submit="handleFormSubmit"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<style scoped></style>
