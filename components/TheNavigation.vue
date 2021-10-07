<template>
  <nav>
    <ul class="block lg:flex lg:items-center">
      <li v-for="(nav, index) in navLinks" :key="index" class=" md:pb-0 pr-5  ">
        <nuxt-link :to="nav.url" class="hover:no-underline">
          <div
            class="bg-white text-dark lg:text-dark lg:bg-secondary p-2 h-full"
          >
            {{ nav.link }}
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="hover:no-underline text-red pr-5">
          <glob class="p-2 " w="25" h="25"></glob>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="hover:no-underline">
          <div class="bg-dark text-white font-normal p-2 rounded-md">
            Mental Health App?
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import glob from "vue-ionicons/dist/ios-globe.vue";
export default {
  components: {
    glob,
  },
  data() {
    return {
      navLinks: [
        {
          url: "/",
          link: "Home",
        },
        {
          url: "/",
          link: "About PsySelect",
        },
        {
          url: "/",
          link: "Contact Us",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
