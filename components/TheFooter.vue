<template>
  <footer>
    <div
      class=" bg-secondary w-full  bottom-0 left-0 z-10   py-0 px-4 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav
        class="container h-40 flex justify-center items-center"
        aria-label="Footer"
      >
        <div
          class="hidden lg:flex w-1/3 h-full mt-6  flex-col items-center justify-start  "
        >
          <img
            src="@/assets/images/Logo_Septembre_2021_large.png"
            alt="PsySelect"
            width="250"
            height="250"
          />
          <!--span
            class="self-center font-bold text-xl  md:text-4xl tracking-widest  text-elevated "
          >
            PsySelect
          </span-->
        </div>
        <div
          class="w-full lg:w-2/3 h-full mt-6  flex flex-row items-start justify-evenly"
        >
          <div class="flex flex-col">
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium border-b-2 border-primary  hover:text-primary"
            >
              PsySelect
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium hover:text-primary"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium hover:text-primary"
            >
              Contact us
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium hover:text-primary"
            >
              Privacy
            </NuxtLink>
          </div>
          <div class="flex flex-col">
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium border-b-2 border-primary  hover:text-primary"
            >
              For Users
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium hover:text-primary"
            >
              How does it work?
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium hover:text-primary"
            >
              Keep me posted!
            </NuxtLink>
          </div>

          <div class="flex flex-col">
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium border-b-2 border-primary   hover:text-primary"
            >
              For Mental Health Services
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium hover:text-primary"
            >
              How does it work?
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-base text-elevated font-medium  hover:text-primary"
            >
              Tell us about your offer
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped></style>
