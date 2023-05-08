<template>
  <form @submit.prevent="addPost">
    <label for="title">Title</label>
    <input type="text" id="title" v-model="title" />

    <label for="content">Content</label>
    <textarea id="content" v-model="content"></textarea>

    <button type="submit">Add Post</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },

  methods: {
    addPost() {
      const postData = {
        title: this.title,
        content: this.content,
      };
      this.$store.dispatch("addPost", postData)
      // clear the form
      this.title = "";
      this.content = "";

       // Navigate to home page and pass new post data as prop
       this.$router.push({ name: 'home' });

    },
  },
};
</script>
