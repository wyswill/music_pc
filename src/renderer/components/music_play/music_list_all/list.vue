<template>
  <div class="waper list">
    <div class="item" v-for="(ele,index) in data" @click="clickHandler(ele.id)" :key="index">
      <img :src="ele.coverImgUrl" alt>
      <p>{{ele.name}}</p>
      <div class="play">
        <img src="../../../assets/image/play.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    to_list(path, from = {}) {
      this.$router.push({
        name: path,
        params: { from }
      });
    },
    clickHandler(id) {
      this.to_list("songList", { id });
    }
  }
};
</script>

