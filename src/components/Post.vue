<template>
  <div class="div">
    <h3>{{ post.title }}</h3>
    <video>
      <source :src="post.videos[0]" />
    </video>
    <button class="more" @click="showMore">Show more</button>
    <div>{{ post.content }}</div>
    <div v-if="show" class="post-popup">
      <h3>{{ post.title }}</h3>
      <div style="text-align: left;margin-bottom: 32px;">{{ post.content }}</div>
      <button class="close" @click="show = false">x</button>
      <video style="margin: 5px;" v-for="(video, key) in post.videos" :key="key" controls>
        <source :src="video" />
      </video>
    </div>
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
          typeof value.videos === "Array"
        );
      },
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showMore() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.more{
    background-color: #009;
    color: #fff;
    border: none;
    padding: 4px;
    float: right;
}
button.close {
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
  background: #d32727;
  color: #ffffff;
  border: none;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  /* font-weight: bold; */
  line-height: 43px;
  padding-bottom: 19px;
}
.post-popup {
  position: fixed;
  left: 5vw;
  top: 5vh;
  right: 5vw;
  bottom: 5vh;
  overflow-y: auto;
  text-align: center;
  background: #000000c9;
  box-shadow: #2a0000ba -1px 18px 17px;
  z-index: 9;
  padding: 16px;
}
.post {
  margin-bottom: 20px;
}

h3 {
  font-size: 18px;
  margin-top: 0;
  text-align: left;
  text-transform: uppercase;
}
video {
  width: 100%;
  max-width: 640px;
  height: auto;
  margin-bottom: 10px;
}

.div {
  border: 1px solid #fff;
  font-size: 16px;
  line-height: 1.5;
  color: #555;
  background: #ffffff24;
  padding: 8px;
  border-radius: 8px;
  box-shadow: #00000029 0px 8px 16px;
  color: #ffff;
  text-align: left;
}
</style>
