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
