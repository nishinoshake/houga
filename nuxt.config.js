require('dotenv').config()

const TITLE = '邦画の予告を、朝まで - Japanese Movie Trailers'
const DESCRIPTION = 'おもしろそうな邦画の予告をひたすら観たいときに。'
const IMAGE_URL = 'https://houga.cc/img/og.png'

export default {
  mode: 'universal',
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: TITLE,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: DESCRIPTION
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: TITLE
      },
      {
        property: 'og:url',
        content: 'https://houga.cc'
      },
      {
        name: 'og:title',
        content: TITLE
      },
      {
        name: 'og:description',
        content: DESCRIPTION
      },
      {
        property: 'og:image',
        content: IMAGE_URL
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: TITLE
      },
      {
        name: 'twitter:description',
        content: DESCRIPTION
      },
      {
        name: 'twitter:image',
        content: IMAGE_URL
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        href: '/img/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Serif+JP:200|Roboto+Mono:300&display=swap&subset=japanese'
      }
    ]
  },
  env: {
    SPACE_ID: process.env.SPACE_ID,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  },
  loading: false,
  css: ['~/assets/scss/index.scss'],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-53153991-9'
      }
    ]
  ],
  styleResources: {
    scss: [
      '~/assets/scss/foundation/_variables.scss',
      '~/assets/scss/foundation/_mixin.scss'
    ]
  },
  build: {
    extend(config) {
      config.module.rules = config.module.rules.map(rule => {
        if (rule.test.toString().indexOf('svg') > -1) {
          return {
            ...rule,
            test: /\.(png|jpe?g|gif|webp)$/
          }
        }
        return rule
      })

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [{ removeTitle: false }]
          }
        }
      })
    }
  },
  manifest: {
    name: '邦画の予告を、朝まで',
    short_name: '邦画の予告を、朝まで',
    lang: 'ja',
    orientation: 'portrait',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: '/index.html'
  },
  workbox: {
    dev: true
  }
}
