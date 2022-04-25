<template>
  <div v-bind="getRootProps()">
    <input v-bind="getInputProps()">
    <p v-if="isDragActive">Drop the files here...</p>
    <p v-else>Drag 'n' drop profile image, or click to select profile image.</p>
  </div>
</template>
<script>
import { useDropzone } from 'vue3-dropzone'
import axios from 'axios'

export default {
  name: 'DropZone',
  props: {
    userProfileId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const onDrop = (acceptFiles) => {
      const userProfileId = props.userProfileId
      const file = acceptFiles[0]
      console.log(file)
      const formData = new FormData()
      formData.append('file', file)
      axios.post(`/users/${userProfileId}/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(() => console.log("File upload successfully"))
      .catch((err) => console.error(err))
    }
    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop })
    return {
      getRootProps,
      getInputProps,
      ...rest,
    }
  }
}
</script>