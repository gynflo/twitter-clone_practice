<script setup>
const { createTweet } = useTweets();
const loading = ref(false);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

async function handleFormSubmit(data) {
  loading.value = true;
  try {
    await createTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
    });
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
      <TweetFormInput :user="props.user" @on-submit="handleFormSubmit" />
    </div>
  </div>
</template>

<style scoped></style>
