<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: 'Default Plan',
    valdiator: (value) => value.startsWith('The'),
  },
  selected: { type: Boolean, default: false },
})

const emit = defineEmits({
  selected(payload) {
    return typeof payload === 'string'
  },
})

function selectPlan() {
  emit('selected', props.name)
}
</script>

<template>
  <div class="plan" :class="{ 'active-plan': selected }" @click="selectPlan">
    <div class="description">
      <span class="title"> {{ name }} </span>
    </div>
  </div>
</template>
