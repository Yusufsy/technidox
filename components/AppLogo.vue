<script setup lang="ts">
import technidoxLogo from '~/technidox-logo.png'
</script>

<template>
  <NuxtLink to="/" class="inline-flex items-center">
    <img
      :src="technidoxLogo"
      alt="TechniDox"
      class="h-9 w-auto sm:h-10"
    >
  </NuxtLink>
</template>
