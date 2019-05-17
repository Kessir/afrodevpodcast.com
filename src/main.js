// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import EpisodeLayout from '~/layouts/EpisodeLayout.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('EpisodeLayout', EpisodeLayout)

  // Add a meta tag
  head.meta.push({
    key: 'keywords',
    name: 'keywords',
    content: 'African,Podcast,Kessir,Adjaho,Software,Developer'
  })
  
  // Bugfix
  const desc = head.meta.find(meta=> meta.name === 'description');
  desc.content = 'A podcast where African software developers share their stories. Hosted by Kessir Adjaho.'
}
