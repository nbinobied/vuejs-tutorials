<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { tasksWithProjectsQuery, type TasksWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/tablesColumns/tasksColumns'

usePageStore().pageData.title = 'Tasks'

const tasks = ref<TasksWithProjects | null>(null)

const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.log(error)

  tasks.value = data
}

await getTasks()
</script>

<template>
  <div class="container py-10 mx-auto">
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
  </div>
</template>
