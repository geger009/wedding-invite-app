export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Faza & Didit Wedding',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Undangan Pernikahan Faza & Didit' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ballet&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  firebase: {
    config: {
      apiKey: "AIzaSyDp613e6pkh2QFVD0EEjpbvckiRbgaxLlU",
      authDomain: "faza-didit.firebaseapp.com",
      projectId: "faza-didit",
      storageBucket: "faza-didit.appspot.com",
      messagingSenderId: "472601893372",
      appId: "1:472601893372:web:4bd50a1568b17692e2fa79"
    },
    services: {
      firestore: true,
      storage: true
    }
  }
}
