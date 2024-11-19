<template>
  <header class="text-black sticky top-0 z-50 bg-white">
    <div
      class="container mx-auto py-2 px-4 lg:px-[6rem] flex justify-between items-center"
    >
      <NuxtLink to="/">
        <img src="~/assets/logo/logo1.png" class="w-24 lg:w-32" />
      </NuxtLink>

      <button
        @click="toggleMenu"
        class="block lg:hidden text-2xl text-yellow-500 focus:outline-none"
      >
        ☰
      </button>
      <nav
        :class="[
          'space-y-4 lg:space-y-0 lg:space-x-12 lg:flex items-center',
          isMenuOpen ? 'block' : 'hidden',
        ]"
        class="absolute lg:relative lg:top-0 top-[4.5rem] left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 z-10 shadow-lg lg:shadow-none"
      >
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
          class="block lg:inline-block hover:text-yellow-500 hover:border-b-2 border-yellow-500"
          :class="[
            activeLink === link.name
              ? 'text-yellow-500 border-b-2 border-yellow-500'
              : '',
            'pb-2',
          ]"
          @click="
            () => {
              setActiveLink(link.name);
              closeMenu();
            }
          "
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const links = [
  { name: "HOME", path: "/" },
  // { name: "ABOUT", path: "/" },
  { name: "ALL SERVICES", path: "/allservices" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "TEAM", path: "/" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

const activeLink = ref<string>("HOME");
const isMenuOpen = ref<boolean>(false);

const setActiveLink = (linkName: string) => {
  activeLink.value = linkName;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
nav a {
  transition: color 0.3s, border-bottom 0.3s;
}
</style>
