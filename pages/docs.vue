<script setup lang="ts">
import { docsCategories, quickStartSlides } from '~/utils/content'

useHead({
  title: 'Docs'
})
</script>

<template>
  <div>
    <section class="bg-surface py-16 sm:py-20 lg:py-24">
      <div class="site-container">
        <SectionHeading
          title="Documentation & Guides"
          copy="Everything you need to know about building, managing, and scaling your knowledge base with TechniDox."
        />

        <div class="mt-14 grid gap-8 xl:grid-cols-3">
          <FeatureCard
            v-for="category in docsCategories.slice(0, 3)"
            :key="category.title"
            :icon="category.icon"
            :title="category.title"
            :description="category.description"
            :points="category.points"
            :tone="category.dark ? 'dark' : 'light'"
          />
        </div>

        <div class="mt-8 grid gap-8 xl:grid-cols-3">
          <FeatureCard
            v-for="category in docsCategories.slice(3)"
            :key="category.title"
            :icon="category.icon"
            :title="category.title"
            :description="category.description"
            :points="category.points"
            :tone="category.dark ? 'dark' : 'light'"
          />
        </div>
      </div>
    </section>

    <section class="site-container py-20 sm:py-24">
      <QuickStartCarousel :slides="quickStartSlides" />
    </section>
  </div>
</template>
