<script setup lang="ts">
import { footerColumns } from '~/utils/content'
</script>

<template>
  <footer class="mt-24 bg-[#dfe0f4]">
    <div class="site-container grid gap-12 py-14 lg:grid-cols-[1.1fr,1fr]">
      <div class="max-w-md space-y-5">
        <AppLogo />
        <p class="text-[18px] font-semibold leading-relaxed text-ink">
          AI-native documentation infrastructure for engineering teams that demand quality, speed, and measurable impact.
        </p>
        <div class="flex gap-4 text-primary">
          <a href="#" aria-label="LinkedIn" class="icon-tile h-12 w-12 rounded-xl bg-primary text-white">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 0 3.1ZM5.6 9.68h2.66V18H5.6V9.68Zm4.33 0h2.56v1.14h.04c.36-.67 1.23-1.37 2.53-1.37 2.71 0 3.21 1.78 3.21 4.1V18H15.6v-3.95c0-.94-.02-2.16-1.31-2.16-1.31 0-1.51 1.03-1.51 2.09V18H9.93V9.68Z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" class="icon-tile h-12 w-12 rounded-xl bg-primary text-white">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M13.38 20v-7.1h2.38l.36-2.77h-2.74V8.36c0-.8.23-1.34 1.37-1.34h1.46V4.55c-.25-.03-1.12-.1-2.12-.1-2.1 0-3.53 1.28-3.53 3.64v2.04H8.2v2.77h2.36V20h2.82Z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" class="icon-tile h-12 w-12 rounded-xl bg-primary text-white">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.25" />
              <circle cx="12" cy="12" r="3.75" />
              <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>

      <div class="grid gap-10 sm:grid-cols-3">
        <div v-for="column in footerColumns" :key="column.title">
          <h3 class="text-2xl font-extrabold text-ink">{{ column.title }}</h3>
          <ul class="mt-5 space-y-3 text-[16px] font-medium text-body">
            <li v-for="link in column.links" :key="link">
              <a href="#" class="transition hover:text-primary">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
