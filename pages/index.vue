<script setup>
const isLoading = ref(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>

<template>
  <div>
    <MainSection title="Home" :isLoading="isLoading">
      <!-- {{ user }} -->

      <TweetForm :user="user" />
    </MainSection>
  </div>
</template>
