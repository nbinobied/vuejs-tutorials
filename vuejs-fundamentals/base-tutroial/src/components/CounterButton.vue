<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++" type="button">Clicked {{ count }} times</button>
</template>
