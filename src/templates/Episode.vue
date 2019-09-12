<template>
  <EpisodeLayout>
    <Logo />
    <g-link class="block mt-1 hover:text-gray-500" to="/">&#8592; Home</g-link>
    <div
      class="text-2xl md:text-3xl mb-4 mt-4 sm:text-left text-center"
    >{{compoundTitle}}</div>

    <iframe
      :src="$page.episode.audioUrl"
      height="100px"
      width="100%"
      frameborder="0"
      scrolling="no"
    ></iframe>

    <div class="flex mt-4 justify-center sm:justify-start">
      <a
        class="px-2 py-1 border border-gray-500 rounded-sm hover:text-gray-600 hover:border-gray-600 mr-4"
        target="_blank"
        :href="getTwitterUrl()"
      >Share on Twitter</a>
      <a
        class="px-2 py-1 border border-gray-500 rounded-sm hover:text-gray-600 hover:border-gray-600"
        target="_blank"
        :href="getFacebookUrl()"
      >Share on Facebook</a>
    </div>
    <div class="mt-8" v-if="$page.episode.image">
      <g-image
        :src="$page.episode.image.src"
        class="h-48 w-48 sm:m-0 m-auto rounded"
        alt="Guest's picture"
      />
    </div>
    <div class="mt-4 markdown-body text-gray-500" v-html="$page.episode.content" />
  </EpisodeLayout>
</template>
<page-query>
query Episode($path: String!){
    episode: episode (path: $path){
        title
        content
        episode
        image (width: 400)
        audioUrl
        excerpt
        path
    }
}
</page-query>

<script>
import Logo from "~/components/Logo.vue";
import { getTwitterIntent, getFacebookIntent } from "~/lib/helpers";

export default {
  metaInfo() {
    return {
      title: this.compoundTitle,
      meta: [
        { name: "author", content: "Kessir Adjaho" },
        {
          key: "description",
          name: "description",
          content: this.$page.episode.excerpt
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.compoundTitle },
        { name: "twitter:description", content: this.$page.episode.excerpt },
        { name: "twitter:creator", content: "@afrodevpodcast" },
        { name: "twitter:site", content: "@afrodevpodcast" },
        {
          name: "twitter:image",
          content: this.imageUrl
        },
        { property: "og:image", content: this.imageUrl },
        { property: "og:url", content: 'https://afrodevpodcast.com' }
      ]
    };
  },
  components: {
    Logo
  },
  computed:{
    compoundTitle(){
      return `Episode ${this.$page.episode.episode}: ${ this.$page.episode.title}`;
    },
    imageUrl(){
      if(this.$page.episode.image) return this.$page.episode.image.src;
      return '/assets/static/content/images/logo.jpg?width=250'
    }
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
