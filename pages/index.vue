<template>
  <div>
    <div class="flex flex-col">
      <div class="w-full h-auto">
        <div class="border-2  w-full  flex-col">
          <div class="container flex  flex-row">
            <div
              class="my-12 lg:my-24 w-full lg:w-1/2 h-full flex flex-col justify-items-start justify-center px-10"
            >
              <h1
                class="text-dark font-bold tracking-wide lg:tracking-wider text-lg lg:text-3xl"
              >
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
                class="max-w-md mt-5 flex flex-col  lg:flex-row lg:justify-between h-10  w-auto"
              >
                <div class="w-full lg:w-2/3 mr-5">
                  <input-component
                    name="email"
                    type="email"
                    autocomplete="email"
                    place-holder="Email"
                  />
                </div>

                <base-button
                  class="w-full mt-2 lg:mt-0 lg:w-36"
                  name="keep me posted"
                  textColor="#383F77"
                  backgroundColor="#F4DC72"
                />
              </div>
            </div>
            <div class="hidden lg:flex my-24   w-1/2 ">
              <div class="">
                <!-- <img
                  class=" mr-2  border-white border"
                  src="@/assets/images/PsySelect_Logo.JPG"
                  alt="PsySelect"
                  width="100"
                  height="100"
                /> -->
              </div>
            </div>
          </div>
        </div>

        <!-- Partie en Blue ----------------------------------------------------------->
        <div class=" flex  flex-col  w-full  bg-primary">
          <div
            class="container my-14 flex flex-row justify-center items-center"
          >
            <!-- Partie en Logo --->
            <div class="hidden  w-5/12   md:flex justify-center">
              <img
                src="@/assets/images/Logo_Septembre_2021_large.png"
                alt="PsySelect"
                width="350"
                height="350"
              />
            </div>
            <div
              class="w-full md:w-6/12 md:border-l-4 md:border-secondary flex flex-col"
            >
              <div class="mx-10 text-white">
                <h1 class=" text-2xl lg:text-4xl">About us</h1>
                <p class="mt-2 font-normal text-sm">
                  Ther are currently XXX mental health apps online
                </p>
                <p class="mt-2 font-normal text-sm">
                  PsySelect matches users with the best offer available that
                  suits their needs.In less than 3 minutes and totally free
                </p>
                <p class="mt-5 font-bold text-sm">
                  In less than 3 minutes, and Totally free
                </p>
              </div>
              <div
                class="mx-auto my-2 py-2 w-11/12 border-t-2 border-secondary border-dotted "
              >
                <div class="flex flex-row justify-evenly">
                  <div class="my-2 font-semibold text-sm text-white">
                    For Users
                  </div>
                  <div class="my-2 font-semibold text-sm text-white">
                    For Mental Health apps
                  </div>
                </div>
                <div class="flex flex-row justify-evenly">
                  <base-button
                    class="w-full mr-2 mt-2 lg:mt-0 lg:w-40"
                    name="keep me posted"
                    textColor="#383F77"
                    backgroundColor="#F4DC72"
                  />
                  <base-button
                    class="w-full mr-2 mt-2 lg:mt-0 lg:w-48"
                    name="Tell us about your offer!"
                    textColor="white"
                    backgroundColor="#383F77"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
