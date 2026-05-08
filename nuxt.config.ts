export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: false },
  app: {
    head: {
      title: 'TechniDox',
      titleTemplate: '%s | TechniDox',
      meta: [
        {
          name: 'description',
          content: 'AI-native documentation infrastructure for teams that need accurate docs, measurable ROI, and scalable collaboration.'
        },
        { name: 'theme-color', content: '#4940a9' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/about', '/docs', '/pricing']
    }
  },
  compatibilityDate: '2025-02-15'
})
