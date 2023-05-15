// store.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createStore } from "vuex";
import { auth } from "./firebaseConfig";

const POSTS_STORAGE_KEY = "my-app-posts";

const store = createStore({
  state() {
    return {
      posts: JSON.parse(localStorage.getItem(POSTS_STORAGE_KEY)) || [],
      user: {
        loggedIn: false,
        data: null,
      },
    };
  },
  mutations: {
    ADD_POST(state, postData) {
      state.posts.push(postData);
      localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(state.posts));
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
  },
  actions: {
    addPost(context, postData) {
      context.commit("ADD_POST", postData);
    },
    async register(context, { email, password, username }) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        context.commit("SET_USER", response.user);
        response.user.updateProfile({ displayName: username });
      } else {
        throw new Error("Unable to register user");
      }
    },
    async login(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        context.commit("SET_USER", response.user);
      } else {
        throw new Error("login failed!! ");
      }
    },
    async logout(context) {
      await signOut(auth);
      context.commit("SET_LOGGED_IN", null);
    },
    async fetchUserData(context, user) {
      context.commit("SET_LOGGED_IN", user !== null);
      if (user) {
        context.commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
        });
      }else{
        context.commit("SET_USER", null);
      }
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    user(state) {
      return state.user;
    },
  },
});

export default store;
