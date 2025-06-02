<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) console.log(error)

  tasks.value = data
})()
</script>

<template>
  <div>
    <h1>Tasks Page</h1>
    <p>List of tasks:</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.id }} - {{ task.name }}</li>
    </ul>
    <RouterLink to="/">Go to home</RouterLink>
  </div>
</template>
