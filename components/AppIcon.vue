<script setup lang="ts">
import technidoxLogo from '~/technidox-logo.png'

const props = defineProps<{
  name: string
  class?: string
}>()

const iconMap: Record<string, string> = {
  sparkles:
    'M12 3l1.3 3.8L17 8l-3.7 1.2L12 13l-1.3-3.8L7 8l3.7-1.2L12 3zm6 10l.7 2.1L21 16l-2.3.9L18 19l-.7-2.1L15 16l2.3-.9L18 13zM6 14l1 2.8L10 18l-3 1.2L6 22l-1-2.8L2 18l3-1.2L6 14z',
  target:
    'M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 3a3 3 0 110 6 3 3 0 010-6z',
  users:
    'M9 11a4 4 0 100-8 4 4 0 000 8zm7 1a3 3 0 100-6 3 3 0 000 6zM3 21v-1a5 5 0 015-5h2a5 5 0 015 5v1H3zm13 0v-1a4 4 0 00-2-3.46A4.9 4.9 0 0119 21h-3z',
  clock:
    'M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l4.5 2.7 1-1.65-3.5-2.05V7z',
  trendUp:
    'M4 16l5-5 3 3 7-8v4h2V3h-7v2h3.7L12 11 9 8 2 15l2 1z',
  chart:
    'M4 20h16v2H2V4h2v16zm3-2V9h2v9H7zm4 0V5h2v13h-2zm4 0v-7h2v7h-2z',
  bolt:
    'M13 2L4 14h6l-1 8 9-12h-6l1-8z',
  branch:
    'M7 6a3 3 0 115 2.83V10c0 1.1.9 2 2 2h2.17A3 3 0 1116 16h-2a4 4 0 01-4-4V8.83A3 3 0 017 6zm0 12a3 3 0 100-6 3 3 0 000 6z',
  chip:
    'M9 3v2H7a2 2 0 00-2 2v2H3v2h2v2H3v2h2v2a2 2 0 002 2h2v2h2v-2h2v2h2v-2h2a2 2 0 002-2v-2h2v-2h-2v-2h2v-2h-2V7a2 2 0 00-2-2h-2V3h-2v2h-2V3H9zm-2 4h10v10H7V7z',
  codeDoc:
    'M7 2h7l5 5v13a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm6 1.5V8h4.5L13 3.5zM9 12l-2 2 2 2m6-4l2 2-2 2m-1-5l-2 6',
  building:
    'M5 21V6l7-4 7 4v15h-5v-5h-4v5H5zm4-11h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z',
  medal:
    'M12 2a5 5 0 00-5 5c0 1.8.96 3.37 2.4 4.24L8 22l4-2 4 2-1.4-10.76A4.99 4.99 0 0017 7a5 5 0 00-5-5zm0 3a2 2 0 110 4 2 2 0 010-4z',
  rocket:
    'M14 4c2 1 4 4 4 6 0 4-4 8-8 8-2 0-5-2-6-4l5-2 3 3 2-2-3-3 2-5c.3-.2.7-.2 1-.2zm-8 9l-3 1c0-3 2-6 5-7l-2 6zm11-1l4-2c0 3-2 6-5 7l1-5z',
  expand:
    'M3 9V3h6v2H5v4H3zm18 0h-2V5h-4V3h6v6zM3 21v-6h2v4h4v2H3zm16-2v-4h2v6h-6v-2h4z'
}

const path = computed(() => iconMap[props.name] ?? iconMap.sparkles)
</script>

<template>
  <img
    v-if="props.name === 'branch'"
    :src="technidoxLogo"
    alt=""
    aria-hidden="true"
    :class="props.class"
  >
  <svg
    v-else
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="props.class"
    aria-hidden="true"
  >
    <path :d="path" />
  </svg>
</template>
