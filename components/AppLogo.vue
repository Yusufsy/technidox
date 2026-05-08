<script setup lang="ts">
import technidoxLogo from '~/technidox-logo.png'
</script>

<template>
  <NuxtLink to="/" class="inline-flex items-center">
    <img
      :src="technidoxLogo"
      alt="TechniDox"
      class="h-10 w-auto sm:h-12"
    >
  </NuxtLink>
</template>
