<template>
  <Layout>
    <div class>
      <img class="h-40 sm:m-0 m-auto" src="../../static/logo.png" alt="Logo">

      <h1 class="sm:text-5xl text-3xl mt-1 sm:text-left text-center">African Developers Podcast</h1>
      <p class="text-base text-gray-400 sm:text-left text-center">
        A podcast where African software developers share their stories. Hosted by
        <a
          href="https://kessir.com"
        >Kessir</a>.
      </p>

      <div class="mt-6 text-gray-500 flex sm:justify-start justify-center">
        <a
          target="_blank"
          href="https://itunes.apple.com/us/podcast/african-developers/id1447880665?mt=2&uo=4"
          class="px-2 py-1 border border-gray-500 rounded-sm mr-3"
        >Apple Podcast</a>
        <a
          target="_blank"
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84NGNmNTc0L3BvZGNhc3QvcnNz"
          class="px-2 py-1 border border-gray-500 rounded-sm mr-3"
        >Google Podcast</a>
        <a
          target="_blank"
          href="https://open.spotify.com/show/1H2fhp4TBINPQSFYxt6PnR"
          class="px-2 py-1 border border-gray-500 rounded-sm mr-3"
        >Spotify</a>
        <a
          target="_blank"
          href="https://overcast.fm/itunes1447880665/african-developers"
          class="px-2 py-1 border border-gray-500 rounded-sm mr-3"
        >Overcast</a>
        <a
          target="_blank"
          href="https://www.breaker.audio/african-developers"
          class="px-2 py-1 border border-gray-500 rounded-sm"
        >Breaker</a>
      </div>
      <hr>

      <div class="mt-10">
        <h2 class="mb-2">Latest Episode: #5 Komolafe Tolulope</h2>
        <!-- <audio
          src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-4-7/14225037-44100-2-643e50209fbb7.m4a"
          controls
          class="w-full"
        ></audio> -->
        <iframe src="https://anchor.fm/africandev/embed/episodes/5-Tolulope-Komolafe--Software-Engineer-at-Everplans--New-York-e3v4mf" height="102px" width="100%" frameborder="0" scrolling="no"></iframe>
      </div>
     
      <div class="mt-10">
        <ul>
          <li class="my-2" v-for="episode in $page.episodes.edges" :key="episode.id"> 
            <g-link :to="episode.node.path">{{episode.node.title}}</g-link>
            </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query Episodes {
    episodes: allEpisode{
        edges{
          node{
            id
            title
            path
          }
        }
    }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>