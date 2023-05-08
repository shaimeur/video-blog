<template>
  <div>
    <h2>Posts</h2>
    <div v-if="!posts || posts.length === 0">
      No posts yet. Why not add one?
    </div>
    <div v-else>
      <Post
        v-for="(post, index) in posts"
        :key="index"
        :post="{ title: post.title, content: post.content, videoUrl: post.videoUrl }"
      />
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
<style scoped>
.post-list {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 32px;
  margin: 0 0 20px 0;
}

.no-posts-message {
  font-size: 20px;
  font-style: italic;
  margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
  h2 {
    font-size: 24px;
  }

  .no-posts-message {
    font-size: 18px;
  }
}
</style>