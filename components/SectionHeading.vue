<script setup lang="ts">
defineProps<{
  label?: string
  title: string
  copy?: string
  align?: 'left' | 'center'
  light?: boolean
}>()
</script>

<template>
  <div :class="align === 'left' ? 'text-left' : 'text-center'">
    <span v-if="label" class="section-label" :class="light ? 'bg-white/10 text-secondary' : ''">
      {{ label }}
    </span>
    <h2 class="section-title" :class="light ? 'text-white' : ''">{{ title }}</h2>
    <p v-if="copy" class="section-copy mt-6" :class="align === 'left' ? 'mx-0 max-w-none' : ''">
      {{ copy }}
    </p>
  </div>
</template>
