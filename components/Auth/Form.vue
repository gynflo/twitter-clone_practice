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
</script>

<template>
  <div>
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
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      type="button"
      @click="handleLogin"
    >
      Submit
    </button>
  </div>
</template>

<style></style>
