<script setup>
const { defaultTransition, twitterBorderColor } = useTailwindConfig();
const wrapperClasses = computed(
  () => `${defaultTransition} ${twitterBorderColor}`
);


</script>

<!-- SIDEBARRIGHT PREVIEWCARD ITEM COMPONENT -->
<template>
  <div
    class="p-3 cursor-pointer border-b dark:hover:bg-dim-300 hover:bg-gray-100"
    :class="wrapperClasses"
  >
    <slot></slot>
  </div>
</template>
