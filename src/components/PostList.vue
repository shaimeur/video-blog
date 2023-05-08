<template>
  <div>
    <h2>Posts</h2>
    <div v-if="!posts || posts.length === 0">
      No posts yet. Why not add one?
    </div>
    <div v-else>
      <Post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  components: {
    Post,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    // create a copy of the posts array to ensure it is not modified
    postsCopy() {
      return [...this.posts]
    },
  },
}
</script>
