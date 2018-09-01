<template>
    <v-toolbar fixed  class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <span class="home"
                @click="navigateTo({name: 'root'})">
                Tab Tracker
            </span>
        </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
            <v-btn falt
                @click="navigateTo('register')">
                Sign Up
            </v-btn>
            <v-btn falt
                @click="navigateTo('login')">
                Login
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color: red;
}
</style>
