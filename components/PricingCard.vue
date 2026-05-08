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
    class="relative rounded-[32px] border border-white/30 bg-[#28244f]/88 p-5 text-white shadow-panel backdrop-blur-sm sm:p-6"
    :class="featured ? 'bg-[#3b3487]/92 ring-2 ring-white/10' : ''"
  >
    <div class="mb-6 flex items-start justify-between gap-4">
      <div class="icon-tile h-12 w-12 rounded-2xl bg-white/[0.04] text-success">
        <AppIcon :name="icon" class="h-6 w-6" />
      </div>
      <span v-if="badge" class="rounded-full bg-secondary/20 px-3.5 py-2 text-[14px] font-extrabold text-secondary">
        {{ badge }}
      </span>
    </div>

    <h3 class="text-[1.45rem] font-extrabold text-white sm:text-[1.75rem]">{{ name }}</h3>
    <div v-if="hasNumericPrice" class="mt-5 flex items-end gap-1.5">
      <span class="text-[1.05rem] font-bold" :class="featured ? 'text-secondary' : 'text-white'">$</span>
      <span class="text-[2.4rem] font-extrabold leading-none sm:text-[3rem]" :class="featured ? 'text-secondary' : 'text-white'">
        {{ price.replace('$', '') }}
      </span>
      <span class="pb-0.5 text-[1rem] font-medium" :class="featured ? 'text-secondary' : 'text-white/[0.85]'">
        {{ suffix }}
      </span>
    </div>
    <div v-else class="mt-6">
      <span class="text-[2.4rem] font-extrabold leading-none text-white sm:text-[3rem]">
        {{ price }}
      </span>
    </div>

    <div class="my-6 h-px bg-white/30" />

    <ul class="space-y-3 text-[0.95rem] text-white/[0.85] sm:text-[1rem]">
      <li v-for="point in points" :key="point" class="flex gap-4">
        <span class="mt-1 text-success">✓</span>
        <span>{{ point }}</span>
      </li>
    </ul>

    <button
      type="button"
      class="mt-7 w-full rounded-2xl border border-white/50 px-6 py-3 text-[15px] font-extrabold transition hover:-translate-y-0.5 sm:text-[16px]"
      :class="featured ? 'bg-primary text-white' : 'bg-transparent text-white'"
    >
      {{ cta }}
    </button>
  </article>
</template>
