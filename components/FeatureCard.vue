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
    class="glass-card h-full p-5 sm:p-6"
    :class="toneMap[tone ?? 'light']"
  >
    <div class="icon-tile" :class="tone === 'dark' ? 'bg-white text-primary' : ''">
      <AppIcon :name="icon" class="h-7 w-7" />
    </div>
    <p v-if="eyebrow" class="mt-5 text-[11px] font-extrabold uppercase tracking-[0.2em]" :class="tone === 'dark' ? 'text-white/[0.8]' : 'text-ink'">
      {{ eyebrow }}
    </p>
    <h3 class="mt-4 text-[1.1rem] font-extrabold leading-tight sm:text-[1.4rem]" :class="tone === 'dark' ? 'text-white' : 'text-ink'">
      {{ title }}
    </h3>
    <p class="mt-3 text-[0.9rem] leading-relaxed sm:text-[0.95rem]" :class="tone === 'dark' ? 'text-white/[0.78]' : 'text-body'">
      {{ description }}
    </p>
    <ul v-if="points?.length" class="mt-5 space-y-2.5">
      <li
        v-for="point in points"
        :key="point"
        class="flex items-start gap-3 text-[0.9rem] font-medium sm:text-[0.95rem]"
        :class="tone === 'dark' ? 'text-white' : 'text-body'"
      >
        <span class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-current text-[11px]">
          <span class="-mt-0.5">✓</span>
        </span>
        <span>{{ point }}</span>
      </li>
    </ul>
  </article>
</template>
