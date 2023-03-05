<script setup>
import { HomeIcon } from "@heroicons/vue/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  PencilIcon,
  ChevronDownIcon,
} from "@heroicons/vue/outline";
const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits(["onTweet", "onLogout"]);
</script>

<template>
  <div class="h-screen flex flex-col">
    <div
      class="p-2 my-2 rounded-full hover:bg-blue-50 hover:rounded-full w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxtLink to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxtLink>
    </div>

    <div class="mt-2 space-y-3">
      <SidebarLeftTab link="/">
        <template #icon> <HomeIcon /></template>
        <template #name>Home</template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template #icon> <HashtagIcon /></template>
        <template #name>Explore</template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template #icon> <BellIcon /></template>
        <template #name>Notifications</template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template #icon> <InboxIcon /></template>
        <template #name>Messages</template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template #icon> <BookmarkIcon /></template>
        <template #name>Bookmarks</template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template #icon> <DocumentTextIcon /></template>
        <template #name>Lists</template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template #icon> <UserIcon /></template>
        <template #name>Profile</template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template #icon> <DotsCircleHorizontalIcon /></template>
        <template #name>More</template>
      </SidebarLeftTab>

      <div class="hidden xl:block">
        <UIButton liquid size="lg" @onClick="($event) => emits('onTweet')">
          <span class="font-bold">Tweet</span>
        </UIButton>
      </div>

      <div class="block xl:hidden">
        <UIButton @onClick="($event) => emits('onTweet')">
          <div class="h-6 w-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>
    </div>

    <div
      class="flex items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover hover:bg-gray-100 dark:hover:bg-dim-800"
      :class="defaultTransition"
      @click="emits('onLogout')"
    >
      <div class="flex">
        <img
          :src="props.user.profileImage"
          alt=""
          class="w-10 h-10 rounded-full"
        />
        <div class="flex-col hidden ml-2 xl:block">
          <h1 class="text-sm font-bold text-gray-800 dark:text-white">
            {{ props.user.name }}
          </h1>
          <p class="text-sm text-gray-400">{{ props.user.handle }}</p>
        </div>
      </div>

      <!-- ICON -->
      <div class="hidden ml-auto xl:block">
        <div class="w-6 h-6">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
