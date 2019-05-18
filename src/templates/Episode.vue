<template>
  <EpisodeLayout>
    <g-link class="sm:m-0 m-auto" to="/">
      <img class="h-20 sm:m-0 m-auto" src="../../static/logo.png" alt="Logo">
    </g-link>
    <h2 class="text-3xl my-4 sm:text-left text-center">{{$page.episode.title}}</h2>

    <iframe
      :src="$page.episode.audioUrl"
      height="100px"
      width="100%"
      frameborder="0"
      scrolling="no"
    ></iframe>

    <!-- <div class="mt-4">
      <h3>Share</h3>
      <div class="flex mt-2">
        <a
          class="px-2 py-1 border border-gray-500 rounded-sm hover:text-gray-600 hover:border-gray-600 mr-4"
          target="_blank"
          href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fkessir.github.io%2Ftaxcalculatorgh&text=A%20tool%20to%20compute%20take-home%20income%2C%20income%20tax%20and%20SSNIT:%20https%3A%2F%2Fkessir.github.io%2Ftaxcalculatorgh&via=afrodevpodcast"
        >Twitter</a>
        <a
          class="px-2 py-1 border border-gray-500 rounded-sm hover:text-gray-600 hover:border-gray-600"
          target="_blank"
          href
        >Facebook</a>
      </div>
    </div> -->
    <div class="mt-4" v-html="$page.episode.content"/>
  </EpisodeLayout>
</template>
<page-query>
query Episode($path: String!){
    episode: episode (path: $path){
        title
        content
        audioUrl
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.episode.title,
      meta: [
          { name: "author", content: "Kessir Adjaho" },
          { name: "description", content: this.$page.episode.excerpt },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: this.$page.episode.title },
          { name: "twitter:description", content: this.$page.episode.excerpt },
          { name: "twitter:creator", content: "@afrodevpodcast" },
          { name: "twitter:site", content: "@afrodevpodcast" },
      ]
    };
  }
};
</script>

