import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      posts: [
        {
          title: "my first post",
          content: "my first article",
        },
      ],
    };
  },
  mutations: {
    ADD_POST(state, postData) {
      state.posts.push(postData);
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
