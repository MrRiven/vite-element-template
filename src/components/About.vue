<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'About',
    setup() {},
    data() {
      return {
        msg: 'About'
      }
    },
    created() {
      console.log('about')
    }
  })
</script>
