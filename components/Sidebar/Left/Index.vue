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
} from "@heroicons/vue/outline";
const { defaultTransition } = useTailwindConfig();
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
        <UIButton liquid size="lg"
          ><span class="font-bold">Tweet</span></UIButton
        >
      </div>

      <div class="block xl:hidden">
        <UIButton>
          <div class="h-6 w-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
