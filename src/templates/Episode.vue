<template>
  <EpisodeLayout>
      <g-link class="sm:m-0 m-auto" to="/">
      <img class="h-20 " src="../../static/logo.png" alt="Logo">
      </g-link>
    <h2 class="text-3xl  my-4">{{$page.episode.title}}</h2>

    <!-- <iframe :src="$page.episode.audio" height="100px" width="100%" frameborder="0" scrolling="no"></iframe> -->
    <div class="mt-4" v-html="$page.episode.content"/>
  </EpisodeLayout>
</template>
<page-query>
query Episode($path: String!){
    episode: episode (path: $path){
        title
        content
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.episode.title
    };
  }
};
</script>

