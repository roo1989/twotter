<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-show="user.isAdmin">
          Admin
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong> {{ followers }}
      </div>
    </div>
    <div class="user-profile__twoots-wrapper">
        <TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot" />
    </div>
  </div>
</template>

<script>
import TwootItem from '@/components/TwootItem.vue';
export default {
  name: "UserProfile",
  components: {TwootItem},
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "RagnarOrnOlafss",
        firstName: "Ragnar",
        lastName: "Olafsson",
        email: "ragnar@example.com",
        isAdmin: false,
        twoots: [
            { id: 1, content: 'Twotter is Amazing!!!' },
            { id: 2, content: 'Don\'t forget to subscribe to me!' },
            { id: 3, content: 'What will happen after the coronavirus passes?' },
        ]
      },
    };
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  methods: {
    followUser() {
      this.followers += 1;
    },
  },
};
</script>

<style scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}
.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
}

.user-profile__admin-badge {
    background-color: rebeccapurple;
    color: white;
    margin-right: auto;
    padding: 0 10px;
    border-radius: 5px;
    font-weight: bold;
}
</style>
