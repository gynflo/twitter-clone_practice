<script setup>
const whatsHappeningItems = ref([
  {
    id: 1,
    title: "SpaceX",
    count: "18.8 Tweets",
  },
  {
    id: 2,
    title: "#CodingIsFun",
    count: "8.8 Tweets",
  },
  {
    id: 3,
    title: "#artToFall",
    count: "10.8 Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    id: 1,
    name: "John Doe",
    handle: "@JohnDoe",
    url: "https://picsum.photos/200/200",
    image: "@/data/avatar/avatar1.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    handle: "@JaneDoe",
    url: "https://picsum.photos/200/200",
    image: "@/data/avatar/avatar1.png",
  },
  {
    id: 3,
    name: "Brenda Doe",
    handle: "@BrandaDoe",
    url: "https://picsum.photos/200/200",
    image: "@/data/avatar/avatar1.png",
  },
]);
</script>
<!-- SIDEBAR RIGHT COMPONENT -->

<template>
  <div class="flex flex-col">
    <!-- Preview Card : What's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="currentItem in whatsHappeningItems"
        :key="currentItem.id"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ currentItem.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ currentItem.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Preview Card : Who to follow -->
    <SidebarRightPreviewCard title="Who to follow ">
      <SidebarRightPreviewCardItem
        v-for="follower in whoToFollowItems"
        :key="follower.id"
      >
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex flex-row">
            <img
              :src="follower.url"
              :alt="follower.name"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ follower.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ follower.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="px-4 py-2 font-bold text-xs text-white rounded-full dark:text-black bg-black dark:bg-white"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>
