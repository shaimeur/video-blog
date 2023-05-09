// store.js
import { createStore } from 'vuex';

const POSTS_STORAGE_KEY = 'my-app-posts';

const store = createStore({
  state() {
    return {
      posts: JSON.parse(localStorage.getItem(POSTS_STORAGE_KEY)) || []
    };
  },
  mutations: {
    ADD_POST(state, postData) {
      state.posts.push(postData);
      localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(state.posts));
    },
  },
  actions: {
    addPost(context, postData) {
      context.commit('ADD_POST', postData);
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
});

export default store;
