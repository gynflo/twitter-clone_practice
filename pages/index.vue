<script setup>
const { useAuthUser } = useAuth();
const { twitterBorderColor } = useTailwindConfig();
const { getHomeTWeets } = useTweets();

const isLoading = ref(false);
const homeTweets = ref();
const user = useAuthUser();

onBeforeMount(async () => {
  try {
    isLoading.value = true;
    const tweets = await getHomeTWeets();
    console.log("🚀 ~ file: index.vue:14 ~ onBeforeMount ~ tweets", tweets);
    homeTweets.value = [...tweets];
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div>
    <MainSection title="Home" :isLoading="isLoading">
      <head>
        <title>Home / Twitter</title>
      </head>

       <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" />
      </div>

      <TweetFormListFeed :tweets="homeTweets" /> 
    </MainSection>
  </div>
</template>
