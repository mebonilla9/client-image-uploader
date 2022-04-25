<template>
  <img v-if="user.userProfileId"
  class="w-40 h-40 rounded-full"
  :src="`http://localhost:8080/api/v1/users/${user.userProfileId}/image/download`"
  alt="Profile Image">
  <h1>{{ user.username }}</h1>
  <p>{{ user.userProfileId }}</p>
  <drop-zone :user-profile-id="user.userProfileId" class="py-10 border-2 border-black rounded-lg" />
</template>
<script>
import DropZone from "@/components/DropZone.vue";

export default {
  name: 'UserProfile',
  components: { DropZone },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const user = props.user;
    return {
      user
    }
  }
}
</script>