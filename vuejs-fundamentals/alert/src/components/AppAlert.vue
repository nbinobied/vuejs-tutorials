<script setup>
import { ref, computed } from 'vue'
import IconError from './icons/IconError.vue'
import IconWarning from './icons/IconWarning.vue'
import IconSuccess from './icons/IconSuccess.vue'
import IconInfo from './icons/IconInfo.vue'

const prop = defineProps({
  type: {
    type: String,
    required: true,
    default: 'info',
  },
})

const emit = defineEmits(['closed'])

const alertType = computed(() => {
  return {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
  }[prop.type]
})

const icon = computed(() => {
  return {
    info: IconInfo,
    success: IconSuccess,
    warning: IconWarning,
    error: IconError,
  }[prop.type]
})

const close = () => {
  closed.value = true
  emit('closed')
}

const closed = ref(false)
</script>

<template>
  <div v-if="!closed" role="alert" :class="`alert ${alertType}`">
    <component :is="icon" />
    <span><slot></slot></span>
    <button @click="close">X</button>
  </div>
</template>
