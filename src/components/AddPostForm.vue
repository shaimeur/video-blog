<template>
  <form @submit.prevent="addPost">
    <label for="title">Title</label>
    <input type="text" id="title" v-model="title" />

    <label for="content">Content</label>
    <textarea id="content" v-model="content"></textarea>

    <label for="video">Video</label>
    <input type="file" id="video" accept="video/*" ref="videoInput" @change="handleVideoChange" />

    <button type="submit">Add Post</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      video: null,
    };
  },
  methods: {
    async addPost() {
      let videoUrl = null;
      if (this.video) {
        const videoDataKey = `my-app-video-${Date.now()}`;
        const videoData = {
          name: this.video.name,
          type: this.video.type,
          size: this.video.size,
          lastModified: this.video.lastModified,
        };
        localStorage.setItem(videoDataKey, JSON.stringify(videoData));
        videoUrl = videoDataKey;
      }

      const postData = {
        title: this.title,
        content: this.content,
        videoUrl: videoUrl,
      };
      this.$store.dispatch("addPost", postData);

      // Clear the form
      this.title = "";
      this.content = "";
      this.video = null;
      this.$refs.videoInput.value = "";

      // Navigate to home page and pass new post data as prop
      this.$router.push({ name: "home" });
    },
    handleVideoChange(event) {
      this.video = event.target.files[0];
    },
  },
};
</script>
