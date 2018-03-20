<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      message: 'Hello World!'
    }
  }
})
</script>

