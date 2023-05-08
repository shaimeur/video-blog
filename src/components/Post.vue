<template>
    <div>
      <h3>{{ post.title }}</h3>
      <div>{{ post.content }}</div>
    </div>
  </template>

  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
