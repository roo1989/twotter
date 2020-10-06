import { UserModule } from '@/store/User';
import { createStore } from 'vuex'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: UserModule,
  }
});
