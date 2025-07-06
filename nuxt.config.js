// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    middleware: ['subdomain'],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    }
  },
  plugins: ['~/plugins/pinia'],
  css: [
    "bootstrap/scss/bootstrap.scss",
    "swiper/css/bundle",
    "~/assets/css/flaticon.css",
    "~/assets/scss/main.scss",
    '~/plugins/locale.client.js'
  ],
  app: {
    head: {
      // name: "viewport",
      // content: "width=device-width, initial-scale=1",
      title: "Eduman - Education & Online Courses Vue Nuxt Template",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/88.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Raleway:wght@300;400;500;600;700;800&display=swap",
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap',
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "ar",
        iso: "ar",
        dir: "rtl",
        name: "Arabic(EG)",
        file: "ar.json"
      },
      {
        code: "en",
        iso: "en",
        dir: "ltr",
        name: "English(US)",
        file: "en.json"
      }
    ],
    defaultLocale: "en",
    // defaultDirection:"ltr",
  }
});
