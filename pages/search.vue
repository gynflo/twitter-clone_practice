<script setup>
const { getTweets: getTweetsComposable } = useTweets();
const isLoading = ref(false);
const searchTweets = ref([]);

//Récupère la queryParams
const searchQuery = useRoute().query.q;

watch(
  () => useRoute().fullPath,
  () => getTweets()
);

async function getTweets() {
  isLoading.value = true;
  try {
    const { tweets } = await getTweetsComposable({
      query: searchQuery,
    });
    searchTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
}

//life cycle
onBeforeMount(() => {
  getTweets();
});
</script>

<template>
  <div>
    <MainSection title="Home" :isLoading="isLoading">
      <head>
        <title>Search / Twitter</title>
      </head>
      <TweetListFeed :tweets="searchTweets" />
    </MainSection>
  </div>
</template>
