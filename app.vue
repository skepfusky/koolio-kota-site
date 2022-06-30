<script setup lang="ts">
import { ref } from "vue";

const title = ref("Nuxt 3 App");
const description = ref("Description");

useHead({
  title: title,
  meta: [
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary-large-image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ],
});
</script>

<template>
  <div id="app-wrapper">
    <main>
      <HeaderHero />
    </main>
    <TheBaseFooter />
  </div>
</template>
