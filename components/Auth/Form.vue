<script setup>
const data = reactive({
  password: "",
  username: "",
  loading: false,
});

async function handleLogin() {
  const { login } = useAuth();

  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
  } finally {
    data.loading = false;
  }
}
</script>

<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput
        placeholder="@Username"
        label="Username"
        v-model="data.username"
        type="text"
      />

      <UIInput
        placeholder="@Password"
        label="Password"
        v-model="data.password"
        type="password"
      />
    </div>

    <div>
      <button
        class="mt-5 p-2 block px-4 w-full border-blue-800 bg-indigo-600 text-white rounded-full"
        @click="handleLogin"
      >
        Login
      </button>
    </div>
  </div>
</template>

<style></style>
