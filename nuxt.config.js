require('dotenv').config()

export default {
  mode: 'universal',
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: '邦画の予告を、朝まで',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'おもしろそうな邦画の予告をひたすら観たいときに。'
      }
    ],
    link: [
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
  }
}
