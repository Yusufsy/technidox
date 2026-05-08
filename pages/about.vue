<script setup lang="ts">
import { overviewBullets, workflowSteps } from '~/utils/content'

useHead({
  title: 'About Us'
})
</script>

<template>
  <section class="site-container py-16 sm:py-20 lg:py-24">
    <div class="grid gap-10 xl:grid-cols-[0.95fr,1.15fr] xl:items-start">
      <div class="pt-6">
        <SectionHeading
          align="left"
          title="TechniDox Overview"
          copy="TechniDox is an enterprise-grade knowledge infrastructure platform designed to transform how teams create, manage, and scale their documentation."
        />
        <p class="mt-8 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          By combining AI-powered insights with collaborative workflows, TechniDox ensures your organizational knowledge is always accurate, accessible, and up to date.
        </p>

        <ul class="mt-10 space-y-4">
          <li v-for="bullet in overviewBullets" :key="bullet" class="flex items-center gap-4 text-lg font-medium text-body">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-full border-4 border-primary text-primary">✓</span>
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </div>

      <div class="glass-card p-6 sm:p-8">
        <div
          v-for="step in workflowSteps"
          :key="step.step"
          class="mb-4 rounded-[24px] border border-primary/[0.15] bg-white px-5 py-6 shadow-sm last:mb-0"
        >
          <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-5">
              <span class="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl font-extrabold text-primary sm:h-16 sm:w-16 sm:text-3xl">
                {{ step.step }}
              </span>
              <div>
                <h3 class="text-2xl font-extrabold text-ink sm:text-[1.7rem]">{{ step.title }}</h3>
                <p class="mt-2 text-base text-body">{{ step.detail }}</p>
              </div>
            </div>
            <span v-if="step.badge" class="rounded-xl bg-secondary/[0.15] px-4 py-2 text-base font-extrabold text-secondary">
              {{ step.badge }}
            </span>
            <span v-else class="text-3xl text-success">✓</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
