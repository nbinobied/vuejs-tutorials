<script setup>
import { ref } from 'vue'

const prop = defineProps({
  username: {
    type: String,
    required: true,
  },
})

const user = ref()

fetch(`https://api.github.com/users/${prop.username}`)
  .then(async (res) => {
    const data = await res.json()
    user.value = data
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.error(err)
  })
</script>

<template>
  <div v-if="user" class="card card-side bg-base-100 shadow-sm">
    <figure>
      <img :src="user.avatar_url" alt="Github" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ user.name }}</h2>
      <p>{{ user.bio }}</p>
      <p>
        <strong>Followers:</strong> {{ user.followers }} <strong>Following:</strong>
        {{ user.following }}
      </p>
      <p></p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" :href="user.html_url">View Profile</button>
      </div>
    </div>
  </div>
</template>
