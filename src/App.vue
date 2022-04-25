<template>
  <div class="m-8 p-5 border-2 border-blue-400 rounded-lg" 
  v-for="user in users">
    <user-profile :user="user" />
  </div>
</template>
<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import UserProfile from '@/components/UserProfile.vue'

export default {
  name: 'App',
  components: { UserProfile },
  setup() {
    const users = reactive([])
    const userProfiles = () => {
      axios.get('/users')
        .then(res => {
          users.push(...res.data)
          console.log(users)
        })
        .catch(err => console.error(err))
    }
    onMounted(() => {
      userProfiles()
    })
    return {
      users,
    }
  },
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
