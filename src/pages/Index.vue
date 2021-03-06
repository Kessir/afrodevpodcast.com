<template>
  <Layout>
    <div class>
      <header>
        <Logo />
        <h1 class="sm:text-5xl text-3xl mt-1 sm:text-left text-center">African Developers Podcast</h1>
        <p class="text-base text-gray-400 sm:text-left text-center">
          A podcast where African software developers share their stories. Hosted by
          <a class="underline"
            href="https://kessir.com"
          >Kessir Adjaho</a>.
        </p>

        <div class="mt-3 text-gray-400">
          <ul class="flex sm:justify-start justify-center flex-wrap">
            <li class="mt-3 sm:mr-2 mx-1" v-for="app in podcastApps" :key="app.name">
              <a
                class="px-2 py-1 border border-gray-500 rounded-sm hover:text-gray-600 hover:border-gray-600"
                target="_blank"
                rel="noreferrer"
                :href="app.url"
              >{{app.name}}</a>
            </li>
          </ul>
        </div>
      </header>
      <section class="text-gray-300">
        <div class="mt-10">
          <g-link class="hover:text-gray-600" :to="latestEpisode.path">
            <h2 class="text-lg text-gray-400">Latest episode</h2>
            <h2 class="mb-2 text-2xl">{{latestEpisode.title}}</h2>
          </g-link>
          <iframe
            :src="latestEpisode.audioUrl"
            height="102px"
            width="100%"
            frameborder="0"
            scrolling="no"
            title="Audio Player"
          ></iframe>
        </div>

        <div class="mt-10">
          <ul>
            <li class="mt-2 py-1" v-for="episode in remainingEpisodes" :key="episode.id">
              <EpisodeCard :episode="episode.node" />
            </li>
          </ul>
        </div>
      </section>
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
            image (width: 250)
            excerpt
            episode
            path
            audioUrl
          }
        }
    }
}
</page-query>
<script>
import EpisodeCard from "~/components/EpisodeCard.vue";
import Logo from "~/components/Logo.vue";
export default {
  metaInfo: {
    title: "Home",
    meta:[
      { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'African Developers Podcast' },
        { name: "twitter:description", content: 'A podcast where African software developers share their stories. Hosted by Kessir Adjaho.' },
        { name: "twitter:creator", content: "@afrodevpodcast" },
        { name: "twitter:site", content: "@afrodevpodcast" },
    ]
  },
  components: {
    EpisodeCard, Logo
  },
  data() {
    return {
      podcastApps: [
        {
          name: "Apple Podcast",
          url:
            "https://itunes.apple.com/us/podcast/african-developers/id1447880665?mt=2&uo=4"
        },
        {
          name: "Google Podcast",
          url:
            "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84NGNmNTc0L3BvZGNhc3QvcnNz"
        },
        {
          name: "Spotify",
          url: "https://open.spotify.com/show/1H2fhp4TBINPQSFYxt6PnR"
        },
        {
          name: "Breaker",
          url: "https://www.breaker.audio/african-developers"
        },
        {
          name: "Overcast",
          url: "https://overcast.fm/itunes1447880665/african-developers"
        }
      ]
    };
  },
  methods: {
    imageUrl(base) {
      if (!base) return "/assets/static/static/logo.png";
      return "/assets/static/static/images/" + base;
    }
  },
  computed: {
    latestEpisode() {
      return this.$page.episodes.edges[0].node;
    },
    remainingEpisodes() {
      return this.$page.episodes.edges;
    }
  }
};
</script>