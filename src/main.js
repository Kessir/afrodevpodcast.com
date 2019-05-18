// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import EpisodeLayout from '~/layouts/EpisodeLayout.vue'
import Footer from '~/components/Footer.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('EpisodeLayout', EpisodeLayout)
  Vue.component('Footer', Footer)

  // Add a meta tag
  head.meta.push({
    key: 'keywords',
    name: 'keywords',
    content: 'African,Podcast,Kessir,Adjaho,Software,Developer'
  })

}
