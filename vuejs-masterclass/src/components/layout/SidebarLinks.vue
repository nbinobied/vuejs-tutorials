<script lang="ts" setup>
interface Link {
  to: string
  icon: string
  label: string
}

defineProps<{
  links: Link[]
}>()
</script>

<template>
  <RouterLink
    active-class="text-primary bg-muted"
    v-for="link in links"
    :key="link.label"
    :to="link.to"
    class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
  >
    <iconify-icon :icon="link.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ link.label }}</span>
  </RouterLink>
</template>
