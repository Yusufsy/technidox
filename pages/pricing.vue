<script setup lang="ts">
import pricingBackground from '~/assets/images/pricing-section1-background.png'
import { pricingPlans } from '~/utils/content'

useHead({
  title: 'Pricing'
})
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[#14122d] py-16 text-white sm:py-20 lg:py-24">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
      :style="{ backgroundImage: `url(${pricingBackground})` }"
    />
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,80,183,0.18),transparent_38%),linear-gradient(180deg,rgba(16,15,37,0.18),rgba(16,15,37,0.36))]" />

    <div class="site-container relative">
      <div class="mx-auto max-w-5xl">
        <SectionHeading
          light
          title="Plans Built For Every Stage Of Growth"
        />
      </div>

      <div class="mt-16 grid gap-8 xl:grid-cols-3">
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.name"
          :icon="plan.icon"
          :name="plan.name"
          :price="plan.price"
          :suffix="plan.suffix"
          :points="plan.points"
          :cta="plan.cta"
          :featured="plan.featured"
          :badge="plan.badge"
        />
      </div>
    </div>
  </section>
</template>
