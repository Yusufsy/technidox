<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  points?: string[]
  eyebrow?: string
  tone?: 'lavender' | 'amber' | 'mint' | 'light' | 'dark'
}>()

const toneMap = {
  lavender: 'bg-[#efefff] text-ink',
  amber: 'bg-[#fff6e8] text-ink',
  mint: 'bg-[#eefbe9] text-ink',
  light: 'bg-white text-ink',
  dark: 'bg-primary text-white border-primary/10'
}
</script>

<template>
  <article
    class="glass-card h-full p-6 sm:p-8"
    :class="toneMap[tone ?? 'light']"
  >
    <div class="icon-tile" :class="tone === 'dark' ? 'bg-white text-primary' : ''">
      <AppIcon :name="icon" class="h-8 w-8" />
    </div>
    <p v-if="eyebrow" class="mt-6 text-sm font-extrabold uppercase tracking-[0.22em]" :class="tone === 'dark' ? 'text-white/[0.8]' : 'text-ink'">
      {{ eyebrow }}
    </p>
    <h3 class="mt-5 text-xl font-extrabold leading-tight sm:text-[1.65rem]" :class="tone === 'dark' ? 'text-white' : 'text-ink'">
      {{ title }}
    </h3>
    <p class="mt-4 text-[0.95rem] leading-relaxed sm:text-base" :class="tone === 'dark' ? 'text-white/[0.78]' : 'text-body'">
      {{ description }}
    </p>
    <ul v-if="points?.length" class="mt-6 space-y-3">
      <li
        v-for="point in points"
        :key="point"
        class="flex items-start gap-3 text-[0.95rem] font-medium sm:text-base"
        :class="tone === 'dark' ? 'text-white' : 'text-body'"
      >
        <span class="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-current text-sm">
          <span class="-mt-0.5">✓</span>
        </span>
        <span>{{ point }}</span>
      </li>
    </ul>
  </article>
</template>
