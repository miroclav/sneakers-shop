<template>
  <div class="flex flex-col justify-center items-center text-center w-72 mx-auto">
    <img height="100" width="100" :src="imgUrl" alt="Info img" />
    <h2 class="mt-4 text-2xl font-medium">{{ title }}</h2>
    <p class="mt-2 text-gray-400">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  imgUrl: String,
  title: String,
  description: String
})
</script>
