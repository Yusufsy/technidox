<script setup lang="ts">
const props = defineProps<{
  slides: {
    title: string
    step: string
    bullets: string[]
  }[]
}>()

const active = ref(0)

const previous = () => {
  active.value = (active.value - 1 + props.slides.length) % props.slides.length
}

const next = () => {
  active.value = (active.value + 1) % props.slides.length
}
</script>

<template>
  <section class="dark-panel relative overflow-hidden px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(111,102,215,0.35),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_28%)]" />
    <div class="absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(circle_at_15%_35%,rgba(255,255,255,0.18),transparent_60%)] opacity-60" />

    <div class="relative">
      <h3 class="text-center text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
        Quick Start Guide
      </h3>

      <div class="mt-8 flex items-center justify-center gap-3">
        <button
          v-for="(slide, index) in slides"
          :key="slide.title"
          type="button"
          class="h-4 rounded-full border transition"
          :class="active === index ? 'w-16 border-primary bg-primary/25' : 'w-4 border-white/50 bg-white/10'"
          :aria-label="`View ${slide.title}`"
          @click="active = index"
        />
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-[72px,1fr,72px] lg:items-center">
        <button
          type="button"
          class="mx-auto hidden h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/[0.15] lg:inline-flex"
          aria-label="Previous step"
          @click="previous"
        >
          ‹
        </button>

        <div class="rounded-[30px] border border-white/20 bg-white/8 p-8 backdrop-blur-sm">
          <div class="flex items-center justify-between gap-4">
            <h4 class="text-3xl font-extrabold text-white sm:text-5xl">
              {{ slides[active].title }}
            </h4>
            <span class="text-2xl font-extrabold text-secondary">{{ slides[active].step }}</span>
          </div>

          <ol class="mt-8 space-y-5 text-xl leading-relaxed text-white/[0.88] sm:text-2xl">
            <li v-for="(bullet, index) in slides[active].bullets" :key="bullet" class="flex gap-4">
              <span class="font-bold text-white">{{ index + 1 }}.</span>
              <span>{{ bullet }}</span>
            </li>
          </ol>
        </div>

        <button
          type="button"
          class="mx-auto hidden h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/[0.15] lg:inline-flex"
          aria-label="Next step"
          @click="next"
        >
          ›
        </button>
      </div>

      <div class="mt-6 flex justify-center gap-4 lg:hidden">
        <button type="button" class="ghost-button border-white/30 bg-white/10 text-white" @click="previous">
          Previous
        </button>
        <button type="button" class="ghost-button border-white/30 bg-white/10 text-white" @click="next">
          Next
        </button>
      </div>
    </div>
  </section>
</template>
