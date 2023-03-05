<script setup>
const { getTweetById } = useTweets();
const { useAuthUser } = useAuth();

const isLoading = ref(false);
const tweet = ref(null);
const user = useAuthUser();

//Rafraichit la page si la source change (url)
watch(
  () => useRoute().fullPath,
  () => getTweet()
);

function geTweetIdFromRoute() {
  return useRoute().params.id;
}

async function getTweet() {
  isLoading.value = true;
  try {
    const response = await getTweetById(geTweetIdFromRoute());

    tweet.value = response.tweet;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
}

//lifecycle
onBeforeMount(() => {
  getTweet();
});
</script>

<template>
  <div>
    <MainSection title="Tweet" :isLoading="isLoading">
      <Head>
        <Title>Tweet</Title>
      </Head>
    </MainSection>

    <div v-if="tweet && user">
      <TweetDetails :tweet="tweet" :user="user" />
    </div>
  </div>
</template>

<style scoped></style>
