<script setup>
const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  color: {
    type: String,
    default: "blue",
  },
  size: {
    type: Number,
    default: 5,
  },
});
</script>

<template>
  <div class="flex items-center text-gray-400 cursor-pointer group">
    <div
      :class="`p-2 group-hover:bg-blue-100 rounded-full group-hover:text-${props.color}-400 dark:group-hover:bg-opacity-20 ${defaultTransition}`"
    >
      <slot name="icon" :classes="`h-${props.size} w-${props.size}`" />
    </div>

    <span :class="`ml-1 group-hover:text-${props.color}-400`">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<style scoped></style>
