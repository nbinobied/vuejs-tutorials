<script setup lang="ts">
defineProps<{
  message: string,
  statusCode: number,
  details: string,
  code: string,
  hint: string | null
}>()
</script>

<template>
  <section class="error">
    <div>
      <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
      <h1 class="error__code">{{ code || statusCode }}</h1>
      <h1 class="error__code" v-if="statusCode">Status Code: {{ statusCode }}</h1>
      <p class="error__msg">{{ message }}</p>
      <p v-if="details" class="text-muted-foreground">{{ details }}</p>
      <p v-if="hint" class="text-muted-foreground">{{ hint }}</p>
      <div class="error-footer">
        <p class="error-footer__text">You'll find lots to explore on the home page.</p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
