<template>
  <div class="container">
    <header>
      <h1>Vue Video Bloging App</h1>
      <router-link class="add" to="/add-post">Add Post</router-link>
    </header>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref, onMounted, computed } from "vue";
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
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: #7e7e7e42;
  border-radius: 8px;
  box-shadow: #0000002e 0px 8px 16px;
  color: #ffffff;
  border: 1px solid #fff;
}
header .add{
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  background-color: #01010142;
  cursor: pointer;
}
header .add:hover{
  background-color: #450000;
  color: #fff;
}

h1 {
  font-size: 36px;
  margin: 0;
}

.add-post-link {
  font-size: 18px;
  color: #007aff;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #007aff;
  padding: 10px 20px;
  border-radius: 5px;
}

.add-post-link:hover {
  background-color: #007aff;
  color: #fff;
  text-decoration: none;
}

.add-post-link:active {
  background-color: #0056b3;
  color: #fff;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 24px;
  }
}

@media screen and (max-width: 400px) {
  header {
    flex-direction: column;
  }

  .add-post-link {
    margin-top: 10px;
  }
}
</style>
