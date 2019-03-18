<template>
  <div class="waper list">
    <div class="item" v-for="(ele,index) in data" :key="index">
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
    return {
      is_can_play: false
    };
  }
};
</script>

