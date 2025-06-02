<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const projects = ref<Tables<'projects'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data
})()
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <p>List of projects:</p>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.id }} - {{ project.name }}</li>
    </ul>
    <RouterLink to="/">Go to home</RouterLink>
  </div>
</template>
