<script setup>
const { useAuthUser } = useAuth();
const { twitterBorderColor } = useTailwindConfig();
const { getHomeTWeets } = useTweets();

const isLoading = ref(false);
const homeTweets = ref([]);
const user = useAuthUser();

onBeforeMount(async () => {
  isLoading.value = true;
  try {
    const tweets = await getHomeTWeets();
    homeTweets.value = [...tweets];
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});

function handleFormSuccess(tweet) {
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}
</script>

<template>
  <div>
    <MainSection title="Home" :isLoading="isLoading">
      <head>
        <title>Home / Twitter</title>
      </head>
      <div v-if="user" class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" @onSuccess="handleFormSuccess" />
      </div>

      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>
