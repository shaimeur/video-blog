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
    addPost() {
      const postData = {
        title: this.title,
        content: this.content,
        videoUrl: null,
      };

      // Save video to localStorage
      if (this.video) {
        const videoData = {
          name: this.video.name,
          type: this.video.type,
          size: this.video.size,
          lastModified: this.video.lastModified,
        };
        const videoDataKey = `my-app-video-${Date.now()}`;
        localStorage.setItem(videoDataKey, JSON.stringify(videoData));
        postData.videoUrl = videoDataKey;
      }

      this.$store.dispatch("addPost", postData);

      // clear the form
      this.title = "";
      this.content = "";
      this.video = null;
      this.$refs.videoInput.value = "";

      // Navigate to home page and pass new post data as prop
      this.$router.push({ name: 'home' });
    },
    handleVideoChange(event) {
      this.video = event.target.files[0];
    },
  },
};
</script>
