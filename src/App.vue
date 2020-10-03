<template>
  <div id="app">
    @{{ user.username }} - {{ fullName }}
    <strong>Followers:</strong> {{ followers }}
    <button @click="followUser">
      Follow User
    </button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: 'RagnarOrnOlafss',
        firstName: 'Ragnar',
        lastName: 'Olafsson',
        email: 'ragnar@example.com',
        'isAdmin': false,
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    followUser() {
      this.followers += 1;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
