<template>
  <div class="dujia">
    <div class="waper">
      <div class="title" style="margin: 11px 0;">
        <h3 class="block" style="cursor: pointer;" v-on:click="jump">独家放送</h3>
      </div>
      <div class="lists block" v-for="(item,index) in dujia_Data" :key="index">
        <img :src="item.picUrl" alt>
        <div class="names">{{item.copywriter}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dujia_Data"],
  methods: {
    jump() {
      this.api.to_list("sun_list", this.$router);
    }
  }
};
</script>

<style>
</style>
