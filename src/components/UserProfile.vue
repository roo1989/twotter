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
      <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
        <label for="newTwoot"><strong>New Twoot </strong>({{ newTwootCharacterCount}}/180)</label>
        <textarea  v-model="newTwootContent" id="newTwoot" rows="4"></textarea>
        <div class="user-profile__create_twoot_type">
          <label for="newTwootType"><strong>Type: </strong></label>
          <select id="newTwootType" v-model="selectedTwootType">
            <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
              {{ option.name }}
            </option>
          </select>
        </div>
        <button class="user-profile__create-twoot__submit">
          Twoot!
        </button>
      </form>
    </div>
    <!-- TwootItem component -->
    <div class="user-profile__twoots-wrapper">
        <TwootItem
            v-for="twoot in user.twoots"
            :key="twoot.id"
            :username="user.username"
            :twoot="twoot"
            @favourite="favourite"
        />
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
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Twoot' }
      ],
      followers: 0,
      user: {
        id: 1,
        username: "RagnarOrnOlafss",
        firstName: "Ragnar",
        lastName: "Olafsson",
        email: "ragnar@example.com",
        isAdmin: true,
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
    newTwootCharacterCount() {
      return this.newTwootContent.length;
    }
  },
  methods: {
    followUser() {
      this.followers += 1;
    },
    favourite(id) {
        console.log(`Twoot with id ${id} favoured!`);
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent
        });
        this.newTwootContent = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

    .user-profile__user-panel {
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #DFE3E8;

        h1 {
          margin: 0;
        }

        .user-profile__admin-badge {
          background-color: rebeccapurple;
          color: white;
          padding: 0 10px;
          border-radius: 5px;
          margin-right: auto;
          font-weight: bold;
        }

        .user-profile__create-twoot {
          padding-top: 20px;
          display: flex;
          flex-direction: column;
        }

    }

    .user-profile__twoots-wrapper {
      display: grid;
      grid-gap: 10px;
    }

    .user-profile__create-twoot__submit {
      display: flex;
      justify-content: center;
      margin-right: auto;
      margin-top: 10px;
      padding: 5px;
      color: black;
      font-weight: bold;
    }
}
</style>
