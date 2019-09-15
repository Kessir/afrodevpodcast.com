<template>
  <g-link class="hover:text-gray-400" :to="episode.path">
    <div class="h-32 flex bg-gray-800 rounded overflow-hidden">
      <g-image
        :src="episode.image.src"
        class="h-32 w-32"
        alt="Picture of guest"
        v-if="episode.image"
      />
      <g-image
        src="~/../content/images/logo.jpg?width=250"
        class="h-32 w-32"
        alt="Default guest image"
        v-else
      />
      <div class="flex flex-col px-4 py-3">
        <h1 class="text-sm sm:text-lg">
          <span class="hidden sm:inline-block">#{{episode.episode}} -</span>
          {{episode.title}}
        </h1>
        <p class="block mt-2 text-xs sm:text-sm h-16 overflow-hidden">{{episode.excerpt}}</p>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["episode"]
};
</script>