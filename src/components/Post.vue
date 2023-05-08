<template>
  <div>
    <h3>{{ post.title }}</h3>
    <video :src="post.videoUrl" controls></video>
    <div>{{ post.content }}</div>
  </div>
</template>


  <script>
 export default {
  props: {
    post: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          value &&
          typeof value.title === "string" &&
          typeof value.content === "string" &&
          typeof value.videoUrl === "string"
        );
      },
    },
  },
};

  </script>

<style scoped>
.post {
  margin-bottom: 20px;
}

h3 {
  font-size: 24px;
  margin-top: 0;
}

video {
  width: 100%;
  max-width: 640px;
  height: auto;
  margin-bottom: 10px;
}

div {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}
</style>
