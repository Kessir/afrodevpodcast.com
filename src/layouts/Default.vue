<template>
  <div class="font-sans text-white leading-normal bg-dark flex flex-col min-h-screen">
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

<style src="../main.css"/>
