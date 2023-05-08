<template>
  <div class="container">
    <header>
      <h1>Vue Video Bloging App</h1>
      <router-link to="/add-post">Add Post</router-link>
    </header>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref, onMounted ,computed} from "vue";
import store from "../store";

export default {
  props: {
    newPost: {
      type: Object,
      default: null,
    },
  },
  components: {
    PostList,
  },
  setup(props) {
    const posts = computed(() => store.getters.getPosts);
    function addPostHandler(postData) {
      store.commit("ADD_POST", postData);
    }

    onMounted(() => {
      const newPost = props.newPost;
      if (newPost) {
        addPostHandler(newPost);
      }
    });

    return {
      posts,
      addPostHandler,
    };
  },
  mounted() {
    if (this.$route.params.newPost) {
      const newPost = JSON.parse(this.$route.params.newPost);
      this.addPostHandler(newPost);
    }
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
