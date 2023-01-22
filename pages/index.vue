<script setup>
const isLoading = ref(false);
</script>

<template>
  <div>
    <MainSection title="Home" :isLoading="isLoading"></MainSection>
  </div>
</template>
