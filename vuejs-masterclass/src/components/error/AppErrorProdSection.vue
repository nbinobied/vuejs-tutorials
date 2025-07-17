<script setup lang="ts">
const props =defineProps<{
  message: string,
  statusCode: number,
  isCustomError: boolean
}>()

const error = ref({
  message: 'An unexpected error occurred.',
  code: 500
})

if (props.isCustomError) {
  error.value.code = props.statusCode
  error.value.message = props.message
}

if(props.statusCode === 406) {
  error.value.code = 404
  error.value.message = 'Not Found'
}
</script>

<template>
  <section class="error">
    <div>
      <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
      <h1 class="error__code">{{ error.code  }}</h1>
      <p class="error__msg">{{ error.message }}</p>
      <div class="error-footer">
        <p class="error-footer__text">You'll find lots to explore on the home page.</p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
