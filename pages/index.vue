<template>
  <div>
    <div class="flex flex-row">
      <div v-for="home in homes" :key="home.objectID">
        <home-card :home="home"></home-card>
      </div>
    </div>
  </div>
</template>

<script>
import homes from "~/data/homes";

export default {
  head() {
    return {
      meta: [
        {
          name: "psyselect app",
          content: "homepage",
          hid: "description",
        },
      ],
    };
  },
  data() {
    return {
      homes: homes.slice(0, 3),
    };
  },
};
</script>

<style lang="scss" scoped></style>
