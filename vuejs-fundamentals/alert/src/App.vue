<script setup>
import AppAlert from './components/AppAlert.vue'
import { ref } from 'vue'

const alerts = ref([
  { type: 'info', message: 'New software update available.' },
  { type: 'success', message: 'Your purchase has been confirmed!' },
  { type: 'warning', message: 'Warning: Invalid email address!' },
  { type: 'error', message: 'Error! Task failed successfully.' },
])
</script>

<template>
  <div class="p-5">
    <AppAlert
      v-for="alert in alerts"
      :key="alert.message"
      :type="alert.type"
      @closed="alerts = alerts.filter((a) => a !== alert)"
    >
      {{ alert.message }}
    </AppAlert>
  </div>
  <pre>
    {{ alerts }}
  </pre>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
