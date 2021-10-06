<template>
  <div
    class="grax_topbar w-full fixed top-0 left-0 z-10 bg-white py-0 border-b-2 border-gray-300"
  >
    <div class="container">
      <div class="w-100 h-auto items-center flex justify-between">
        <div class="w-auto text-white">
          <NuxtLink to="/" class="hover:no-underline flex">
            <img
              class="rounded-full mr-2 profile-pic border-white border"
              src="@/assets/images/logo.JPG"
              alt="PsySelect"
              width="50"
              height="50"
            />
            <span
              class="self-center text-xl font-medium md:text-2xl tracking-wider  text-dark "
            >
              PsySelect
            </span>
          </NuxtLink>
        </div>
        <div class=" hidden lg:block">
          <TheNavigation />
        </div>
        <button class="block lg:hidden" aria-label="open menu" @click="toggle">
          <ul v-if="!isOpen" class="hamburger text-black">
            <li class="bg-black" />
            <li class="bg-black" />
            <li class="bg-black" />
          </ul>
          <span v-if="isOpen" aria-label="close menu">
            <close-icon h="50" w="50" />
          </span>
        </button>
      </div>
    </div>
    <div
      v-if="isOpen"
      class="block lg:hidden  text-dark bg-white w-full h-full px-10 border-t-2 border-gray-600"
      @click="isOpen = false"
    >
      <TheNavigation />
    </div>
  </div>
</template>

<script>
import closeIcon from "vue-ionicons/dist/ios-close.vue";
export default {
  components: {
    closeIcon,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.hamburger li {
  width: 35px;
  height: 5px;
  margin: 6px 0;
}
</style>
