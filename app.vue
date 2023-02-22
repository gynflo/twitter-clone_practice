<script setup>
const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const user = useAuthUser();
const {
  openPostTweetModal,
  closePostTweeModal,
  usePostTweetModal,
  getHomeTWeets,
  useReplyTweet,
} = useTweets();
const postTweetModal = usePostTweetModal();
const replyTweet = useReplyTweet();
const emitter = useEmitter();

emitter.$on("replyTweet", (tweet) => {
  openPostTweetModal(tweet);
});

const isAuthLoading = useAuthLoading();
const darkMode = ref(false);

onBeforeMount(() => {
  initAuth();
});

function handleFormSuccess(tweet) {
  closePostTweeModal();
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}
function handleOpenModalTweet() {
  openPostTweetModal(null);
}

function handleModalClose() {
  closePostTweeModal();
}
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div v-if="isAuthLoading">
        <div>
          <LoadingPage />
        </div>
      </div>
      <div class="min-h-full" v-else-if="user">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left Sidebar -->
          <div class="hidden md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft @onTweet="handleOpenModalTweet" />
            </div>
          </div>
          <!-- Main Sidebar -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view></router-view>
          </main>
          <!-- Right Sidebar -->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
      <AuthPage v-else />
      <UIModal :isOpen="postTweetModal" @onClose="handleModalClose">
        <div v-if="user">
          <TweetForm
            :user="user"
            :replyTo="replyTweet"
            showReply
            @OnSuccess="handleFormSuccess"
          />
        </div>
      </UIModal>
    </div>
  </div>
</template>

<style scoped></style>
