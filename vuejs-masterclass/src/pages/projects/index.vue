<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/tablesColumns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)

const getProjects = async () => {
  const { data, error } = await projectsQuery

  if (error) console.log(error)

  projects.value = data
}

await getProjects()
</script>

<template>
  <div>
    <p>List of projects:</p>
    <div class="container py-10 mx-auto">
      <DataTable v-if="projects" :columns="columns" :data="projects" />
    </div>
    <RouterLink to="/">Go to home</RouterLink>
  </div>
</template>
