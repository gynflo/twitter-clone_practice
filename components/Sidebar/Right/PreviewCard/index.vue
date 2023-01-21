<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<!-- PREVIEW CARD COMPONENT -->
<template>
  <div
    class="m-2 border bg-gray-50 rounded-2xl dark:bg-dim-700 overflow-hidden"
    :class="twitterBorderColor"
  >
    <h1
      class="p-3 border-b text-xl font-extrabold text-gray-900 dark:text-white"
      :class="twitterBorderColor"
    >
      {{ props.title }}
    </h1>

    <slot></slot>

    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="defaultTransition"
    >
      Show More
    </div>
  </div>
</template>
