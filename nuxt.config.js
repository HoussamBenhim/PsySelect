export default {
  components: true,

  head: {
    titleTemplate: "PsySelect",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "psyselect app",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "@/assets/images/Logo.JPG" },
      {
        rel: "stylesheet",
        href:
          "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
      },
    ],
  },
  modules: ["~/modules/test"],
  buildModules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main"],
};
