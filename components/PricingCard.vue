<script setup lang="ts">
const props = defineProps<{
  icon: string
  name: string
  price: string
  suffix: string
  points: string[]
  cta: string
  featured?: boolean
  badge?: string
}>()

const hasNumericPrice = computed(() => props.price.startsWith('$'))
</script>

<template>
  <article
    class="relative rounded-[32px] border border-white/30 bg-[#28244f]/88 p-6 text-white shadow-panel backdrop-blur-sm sm:p-8"
    :class="featured ? 'bg-[#3b3487]/92 ring-2 ring-white/10' : ''"
  >
    <div class="mb-8 flex items-start justify-between gap-4">
      <div class="icon-tile h-14 w-14 rounded-2xl bg-white/[0.04] text-success">
        <AppIcon :name="icon" class="h-7 w-7" />
      </div>
      <span v-if="badge" class="rounded-full bg-secondary/20 px-4 py-2.5 text-base font-extrabold text-secondary">
        {{ badge }}
      </span>
    </div>

    <h3 class="text-2xl font-extrabold text-white sm:text-3xl">{{ name }}</h3>
    <div v-if="hasNumericPrice" class="mt-6 flex items-end gap-2">
      <span class="text-xl font-bold" :class="featured ? 'text-secondary' : 'text-white'">$</span>
      <span class="text-4xl font-extrabold leading-none sm:text-5xl" :class="featured ? 'text-secondary' : 'text-white'">
        {{ price.replace('$', '') }}
      </span>
      <span class="pb-1 text-xl font-medium" :class="featured ? 'text-secondary' : 'text-white/[0.85]'">
        {{ suffix }}
      </span>
    </div>
    <div v-else class="mt-6">
      <span class="text-4xl font-extrabold leading-none text-white sm:text-5xl">
        {{ price }}
      </span>
    </div>

    <div class="my-8 h-px bg-white/30" />

    <ul class="space-y-4 text-base text-white/[0.85] sm:text-lg">
      <li v-for="point in points" :key="point" class="flex gap-4">
        <span class="mt-1 text-success">✓</span>
        <span>{{ point }}</span>
      </li>
    </ul>

    <button
      type="button"
      class="mt-8 w-full rounded-2xl border border-white/50 px-6 py-3 text-lg font-extrabold transition hover:-translate-y-0.5 sm:text-xl"
      :class="featured ? 'bg-primary text-white' : 'bg-transparent text-white'"
    >
      {{ cta }}
    </button>
  </article>
</template>
