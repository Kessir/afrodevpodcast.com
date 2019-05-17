<template>
  <Layout>
    <div class>
      <img class="h-40" src="../../static/logo.png" alt>

      <h1 class="text-4xl mt-4">African Developers Podcast</h1>
      <div class="flex mt-4">
        <button class="px-2 py-1 border rounded-sm mr-3">Apple Podcast</button>
        <button class="px-2 py-1 border rounded-sm mr-3">Google Podcast</button>
        <button class="px-2 py-1 border rounded-sm mr-3">Spotify</button>
        <button class="px-2 py-1 border rounded-sm">Overcast</button>
      </div>
      <p
        class="my-2 text-lg mt-4 text-gray-500"
      >A podcast where African software developers share their stories. Hosted by  <a href="https://kessir.com">Kessir</a>.</p> 

      <div class="mt-4">
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