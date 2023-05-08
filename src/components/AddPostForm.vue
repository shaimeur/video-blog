<template>
  <div class="post-form-container">
    <form class="post-form" @submit.prevent="addPost">
      <label for="title" class="post-form__label">Title</label>
      <input type="text" id="title" class="post-form__input" v-model="title" />

      <label for="content" class="post-form__label">Content</label>
      <textarea id="content" class="post-form__textarea" v-model="content"></textarea>

      <label for="video" class="post-form__label">Video</label>
      <input type="file" id="video" class="post-form__file-input" accept="video/*" ref="videoInput" @change="handleVideoChange" />

      <button type="submit" class="post-form__submit-button">Add Post</button>
    </form>
  </div>
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
<style scoped>
.post-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.post-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
}

.post-form__label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.post-form__input,
.post-form__textarea,
.post-form__file-input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.post-form__input:focus,
.post-form__textarea:focus,
.post-form__file-input:focus {
  outline: none;
  border-color: #4d90fe;
  box-shadow: 0 0 4px #4d90fe;
}

.post-form__submit-button {
  background-color: #4d90fe;
  color: #fff;
  padding: 0.5rem 2rem;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.post-form__submit-button:hover,
.post-form__submit-button:focus {
  background-color: #357ae8;
}
</style>

