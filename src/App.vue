<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    checkAuth: () => {
    }
  },
  mounted() {
    this.checkAuth()
  }
}
</script>

<style>
</style>
