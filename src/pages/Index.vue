<template>
  <Layout>
    <div class>
      <img class="h-40" src="../../static/logo.png" alt>

      <h1 class="text-4xl mt-4">African Developers Podcast</h1>
         <p
        class="text-base text-gray-400"
      >A podcast where African software developers share their stories. Hosted by  <a href="https://kessir.com">Kessir</a>.</p> 
      
      <div class="mt-5 text-gray-500">
        <a href="https://itunes.apple.com/us/podcast/african-developers/id1447880665?mt=2&uo=4" class="px-2 py-1 border rounded-sm mr-3">Apple Podcast</a>
        <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84NGNmNTc0L3BvZGNhc3QvcnNz" class="px-2 py-1 border rounded-sm mr-3">Google Podcast</a>
        <a href="https://open.spotify.com/show/1H2fhp4TBINPQSFYxt6PnR" class="px-2 py-1 border rounded-sm mr-3">Spotify</a>
        <a href="https://overcast.fm/itunes1447880665/african-developers" class="px-2 py-1 border rounded-sm">Overcast</a>
      </div>
   

      <div class="mt-6">
        <h2 class="mb-2">Latest Episode</h2>
<!-- <audio src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-4-7/14225037-44100-2-643e50209fbb7.m4a" controls class="w-full" ></audio> -->

        <iframe src="https://anchor.fm/africandev/embed/episodes/5-Tolulope-Komolafe--Software-Engineer-at-Everplans--New-York-e3v4mf" height="102px" width="100%" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>