<template>
    <div>
        Main
        <br />
      <router-link :to="{ name: 'Main' }">Go to Main</router-link>
      <router-link :to="{ name: 'Profile' }">Go to Profile</router-link>
      <router-link :to="{ name: 'About' }">Go to About</router-link>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Wwwelcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="">
    
</style>