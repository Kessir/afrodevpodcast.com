<template>
  <div class="font-sans text-gray-300 leading-normal bg-dark flex flex-col min-h-screen">
    <div class="container m-auto px-4 sm:px-6 py-4 sm:py-8 flex-grow max-w-3xl">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<style >
@import url("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css");
@import url("../main.css");

.markdown-body {
  color: inherit;
}
.markdown-body > ul {
  list-style: disc
}
</style>
