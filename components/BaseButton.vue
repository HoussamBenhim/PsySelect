<template>
  <button
    v-bind="$attrs"
    :type="type"
    :style="[baseStyles]"
    class="group h-full rounded-md relative  flex justify-center py-2 lg:px-4  text-sm font-normal  text-dark  hover:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
    @click="$emit('click-event')"
  >
    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
      <!-- Slot: SVG -->
      <slot />
    </span>
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "connexion",
    },
    type: {
      type: String,
      default: "submit",
    },
    backgroundColor: {
      type: String,
      default: "red",
    },
    textColor: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      baseStyles: {
        color: this.textColor,
        backgroundColor: this.backgroundColor,
      },
    };
  },
};
</script>

<style lang="css" scoped></style>
