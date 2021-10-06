<template>
  <div>
    <div class="flex flex-col">
      <div class="w-full h-screen border-2 border-black">
        <div class="border-2 border-black w-full h-1/2 flex-col">
          <div class="container flex flex-row ">
            <div
              class="w-1/2 h-96 border-2  border-black flex flex-col items-start justify-center px-10"
            >
              <h1 class="text-dark font-bold tracking-wider text-3xl">
                We find the best digital mental <br />
                health support available for you
              </h1>
              <p class="text-lightGray font-medium text-sm tracking-wide ">
                Looking for a mental health support ? we find the best offer
                <br />
                <span class="font-bold text-dark"
                  >In 3 minutes. Totally free!</span
                >
              </p>
              <div
                class="mt-5 flex flex-row justify-around border-2 border-black w-full"
              >
                <div class=" border-2 border-primary w-62">
                  <input-component
                    name="email"
                    type="email"
                    autocomplete="email"
                    place-holder="Email"
                  />
                </div>

                <base-button
                  class=""
                  name="keep me posted"
                  textColor="white"
                  backgroundColor="#F4DC72"
                />
              </div>
            </div>
            <div class="w-1/2  border-2 border-black">
              <h1>
                We find the best digital mental <br />
                health support available for you
              </h1>
              <p>
                Looking for a mental health support ? we find the best offer
                <br />
                In 3 minutes. Totally free
              </p>
            </div>
          </div>
        </div>
        <div class="border-2 border-black w-full h-1/2 bg-primary"></div>
      </div>
    </div>
  </div>
</template>

<script>
import homes from "~/data/homes";
import BaseButton from "../components/BaseButton.vue";
import InputComponent from "../components/InputComponent.vue";

export default {
  components: { InputComponent, BaseButton },
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
