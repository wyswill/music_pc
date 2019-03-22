<template>
  <div class="showinfo">
    <div class="waper"></div>
    <iframe :src="src" frameborder="0" v-if="src != ''"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return { params: { data: {} }, src: "" };
  },
  async mounted() {
    let { params } = this.$route;
    let {
      from: { data }
    } = params;
    // 活动页面
    if (!parseInt(data)) {
      this.src = data;
    } else {
      let res = await this.api.is_can_play_fuc(data);
      console.log(res);
    }
  }
};
</script>

<style>
@import url("./style/style.css");
</style>
