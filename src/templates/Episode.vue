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

    <div class="mt-4">
      <h3>Share</h3>
      <div class="flex mt-2">
        <a
          class="px-2 py-1 border border-gray-500 rounded-sm hover:text-gray-600 hover:border-gray-600 mr-4"
          target="_blank"
          :href="getTwitterUrl()"
        >Twitter</a>
        <a
          class="px-2 py-1 border border-gray-500 rounded-sm hover:text-gray-600 hover:border-gray-600"
          target="_blank"
          :href="getFacebookUrl()"
        >Facebook</a>
      </div>
    </div>
    <div class="mt-4 markdown-body text-gray-500" v-html="$page.episode.content"/>
  </EpisodeLayout>
</template>
<page-query>
query Episode($path: String!){
    episode: episode (path: $path){
        title
        content
        audioUrl
        excerpt
        path
    }
}
</page-query>

<script>
import { getTwitterIntent, getFacebookIntent } from "~/lib/helpers";
const logoUrl =
  "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/1292613/1292613-1548407213420-77ff16fcab8ac.jpg";
export default {
  metaInfo() {
    return {
      title: this.$page.episode.title,
      meta: [
        { name: "author", content: "Kessir Adjaho" },
        {
          key: "description",
          name: "description",
          content: this.$page.episode.excerpt
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.episode.title },
        { name: "twitter:description", content: this.$page.episode.excerpt },
        { name: "twitter:creator", content: "@afrodevpodcast" },
        { name: "twitter:site", content: "@afrodevpodcast" },
        {
          name: "twitter:image",
          content: logoUrl
        },
        { property: "og:image", content: logoUrl }
      ]
    };
  },
  methods: {
    getTwitterUrl() {
      return getTwitterIntent(
        this.$page.episode.title,
        this.$page.episode.path
      );
    },
    getFacebookUrl() {
      return getFacebookIntent(
        this.$page.episode.title,
        this.$page.episode.path
      );
    }
  }
};
</script>
