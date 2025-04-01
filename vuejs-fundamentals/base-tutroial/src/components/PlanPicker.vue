<script setup>
import CoffeePlan from './CoffeePlan.vue'
import { ref } from 'vue'

const plans = ref([
  { name: 'The Single' },
  { name: 'The Curious' },
  { name: 'The Addict' },
  { name: 'The Hacker' },
])

const selectedCoffeePlan = ref()

function handleSelectConffeePlan(name) {
  selectedCoffeePlan.value = name
}
</script>

<template>
  <div ref="planWrapper" class="plans">
    <CoffeePlan
      v-for="plan in plans"
      :key="plan"
      :name="plan.name"
      :selected="selectedCoffeePlan === plan.name"
      @selected="handleSelectConffeePlan"
    ></CoffeePlan>
  </div>
</template>
