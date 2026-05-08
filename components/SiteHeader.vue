<script setup lang="ts">
import { navigationLinks } from '~/utils/content'

const route = useRoute()
const mobileOpen = ref(false)

watch(
  () => route.path,
  () => {
    mobileOpen.value = false
  }
)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-primary/10 bg-white/90 backdrop-blur-md">
    <div class="site-container flex items-center justify-between py-4">
      <AppLogo />

      <nav class="hidden items-center gap-8 text-base font-semibold text-primary lg:flex">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.to"
          :to="link.to"
          class="transition hover:text-secondary"
          :class="route.path === link.to ? 'font-extrabold text-primary' : 'text-primary/90'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="hidden lg:block">
        <NuxtLink to="/pricing" class="cta-button rounded-xl px-6 py-2.5">
          Get Started
        </NuxtLink>
      </div>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/[0.15] text-primary lg:hidden"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="space-y-1.5">
          <span class="block h-0.5 w-6 rounded bg-current" />
          <span class="block h-0.5 w-6 rounded bg-current" />
          <span class="block h-0.5 w-6 rounded bg-current" />
        </span>
      </button>
    </div>

    <div v-if="mobileOpen" class="border-t border-primary/10 bg-white lg:hidden">
      <div class="site-container flex flex-col gap-4 py-5">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-2xl px-4 py-3 text-base font-bold"
          :class="route.path === link.to ? 'bg-primary text-white' : 'bg-primary/5 text-primary'"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/pricing" class="cta-button">
          Get Started
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
