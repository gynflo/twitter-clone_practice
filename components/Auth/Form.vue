<script setup>
const data = reactive({
  username: "",
  password: "",
  isLoading: false,
});
async function handleLogin() {
  const { login } = useAuth();

  data.isLoading = true;
  try {
    login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.isLoading = false;
  }
}

const isButtonDisabled = computed(() => {
  return !data.username || !data.password || data.isLoading;
});
</script>

<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-10 h-10">
        <LogoTwitter />
      </div>
    </div>
    <div class="pt-5 space-y-6">
      <UIInput
        label="username"
        placeholder="@username"
        v-model="data.username"
      />

      <UIInput
        label="password"
        placeholder="@password"
        type="password"
        v-model="data.password"
      />
    </div>
    <UIButton liquid @click="handleLogin" :disabled="isButtonDisabled"
      >Login</UIButton
    >
  </div>
</template>

<style></style>
