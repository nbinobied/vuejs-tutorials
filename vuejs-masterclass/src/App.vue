<script setup lang="ts">
const errorStore = useErrorStore()

onErrorCaptured((error) => {
  errorStore.setError({ error, statusCode: 500 })
  return false // Prevents the error from propagating further
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError" :error="errorStore.activeError" />

    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>

        <template #fallback>
          <span>Loading ..</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
