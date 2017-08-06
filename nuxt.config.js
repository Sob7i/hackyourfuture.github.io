const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const isGenerating = process.env.npm_config_argv ?
      JSON.parse(process.env.npm_config_argv).original.indexOf('generate:nuxt') > -1 : false

let apiUrl = baseUrl

if (isGenerating){
  apiUrl = 'http://localhost:3051/'
}

module.exports = {

  env: {
    baseUrl,
    apiUrl,
    isGenerating
  },

  generated: {
    routes: ['/']
  },

  modules: [
    ['@nuxtjs/proxy', { pathRewrite: { '^/api' : '' } }]
  ],

  plugins: [
    '~/plugins/buefy'
  ],

  proxy: {
    '/api': 'http://localhost:3051/'
  }
}
