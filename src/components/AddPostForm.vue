<template>
  <div class="stepper post-form-container">
    <div class="step1" v-if="step == 1">
      <div class="">
        <h1 class="title">Add new Video post</h1>
        <form class="post-form">
          <label for="title" class="post-form__label">Title</label>
          <input
            type="text"
            id="title"
            class="post-form__input"
            v-model="title"
            placeholder="Video title..."
          />

          <label for="content" class="post-form__label">Content</label>
          <textarea
            id="content"
            class="post-form__textarea"
            v-model="content"
            placeholder="Video description..."
          ></textarea>

          <label for="video" class="post-form__label">Video</label>
          <!-- <input
            type="ftextile"
            multiple
            id="video"
            class="post-form__file-input"
            accept="video/*"
            ref="videoInput"
            @change="handleVideoChange"
          /> -->
          <input
            class="post-form__file-input"
            type="text"
            v-for="video,key in videos"
            v-model="videos[key]"
            placeholder="Video url..." :key="key"
          />
          <span @click="addVideo" class="more">Add more videos</span>
        </form>
      </div>
    </div>
    <div class="step2"  v-if="step == 2">
      <h4>Title: {{ title }}</h4>
      <p>Content: {{ content }}</p>

      <span>Videos:</span>
      <div class="video-container">
        <span v-for="url in videos">{{ url }}</span> <br>
      </div>
    </div>
    <div class="controls">
      <div>
        <button @click="step--" class="prev"  v-if="step > 1">Prev</button>
      </div>
      <div>
        <button @click="step++" class="next"  v-if="step == 1">Next</button>
        <button @click="addPost" class="save"  v-if="step > 1">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      videos: [null],
      step:1
    };
  },
  methods: {
    addVideo (){
      this.videos.push(null);
    },
    async addPost() {
      const formData = {
        title: this.title,
        content: this.content,
        videos: this.videos
      };
      await this.$store.dispatch("addPost", formData);
      this.title = "";
      this.content = "";
      this.videos = [null];
      this.$router.push({ name: "home" });

      // let videoUrl = null;
      // if (this.video) {
      //   const videoDataKey = `my-app-video-${Date.now()}`;
      //   const videoData = {
      //     name: this.video.name,
      //     type: this.video.type,
      //     size: this.video.size,
      //     lastModified: this.video.lastModified,
      //   };
      //   localStorage.setItem(videoDataKey, JSON.stringify(videoData));
      //   videoUrl = videoDataKey;
      // }

      // const postData = {
      //   title: this.title,
      //   content: this.content,
      //   videoUrl: videoUrl,
      // };
      // this.$store.dispatch("addPost", postData);

      // // Clear the form
      // this.title = "";
      // this.content = "";
      // this.video = null;
      // this.$refs.videoInput.value = "";

      // // Navigate to home page and pass new post data as prop
      // this.$router.push({ name: "home" });
    },
    // handleVideoChange(event) {
    //   const videos = [];
    //   Array.from(event.target.files).forEach((video) => {
    //     console.log("video", video.name);
    //   });
    //   this.video = event.target.files[0];
    // },
  },
};
</script>
<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
    max-width: 600px;
    width: 100vw;
    margin: 0 auto;
    margin-top: 16px;
    padding: 16px;
    border: 1px solid #ffffff;
    border-radius: 8px;
    background-color: #ffffff30;
}
.next,.save{
  background-color: #fe4d51;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}
.prev{
  background-color: #ffd5d6;
  color: #200000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}
.post-form-container {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.title {
  margin-bottom: 5vh;
}
.post-form,.step2 {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100vw;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background-color: #ffffff30;
}
.step2 h4{
  margin-bottom: 16px;
  font-size: 32px;
}
.step2 p{
  font-size: 18px;
  margin-bottom: 16px;
}

.video-container span{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background-color: #ffffff30;
}


.post-form__label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.post-form__input,
.post-form__textarea,
.post-form__file-input {
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #0000004d;
  color: #ffffff;
}
.post-form__file-input::placeholder {
  color: #ffffff50;
}

.post-form__input:focus,
.post-form__textarea:focus,
.post-form__file-input:focus {
  outline: none;
  border-color: #4d90fe;
  box-shadow: 0 0 4px #4d90fe;
}

.post-form__submit-button {
  background-color: #fe4d51;
  color: #fff;
  padding: 1rem 2rem;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
}

.post-form__submit-button:hover,
.post-form__submit-button:focus {
  background-color: #357ae8;
}
span.more {
  display: block;
  margin-bottom: 16px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  padding: 8px;
  width: fit-content;
  border-radius: 5px;
}
span.more:hover{
  background-color: #ffffff30;
}
</style>
