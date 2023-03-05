<script setup>
import { SearchIcon } from "@heroicons/vue/outline";
const search = ref("");
const emitter = useEmitter();

function handleSearch() {
  useRouter().push({
    path: "/search",
    query: {
      q: search.value,
    },
  });
}
function getYear() {
  const myDate = new Date();
  return myDate.getFullYear();
}

function handleToggleDarkMode() {
  emitter.$emit("toggleDarkMode");
}

//Data
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
    <!-- Search Bar-->
    <div class="relative m-2 my-6">
      <div
        class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer"
      >
        <div class="w-6 h-6">
          <SearchIcon @click="handleSearch" />
        </div>
      </div>
      <input
        v-model="search"
        type="text"
        class="flex items-center w-full pl-12 text-black text-sm font-normal dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9"
        placeholder="Search Tweet"
      />
    </div>
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

    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500">
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline" @click="handleToggleDarkMode"
            >Dark Mode</a
          >
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Privacy Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Cookie Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Accessebility</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Ads info</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">More...</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#">&#9400; {{ getYear() }} Twitter, Inc</a>
        </li>
      </ul>
    </footer>
  </div>
</template>
