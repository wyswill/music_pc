<template>
  <div class="tuijianMv">
    <div class="waper">
      <div class="title">推荐MV</div>
      <div class="mvlist">
        <div class="block text_overflow" v-for="(item,index) in mv" :key="index">
          <!-- 封面图 -->
          <div class="cover_img" @click="click($event)">
            <img :src="item.picUrl" :id="item.id" alt>
            <div class="mask">{{item.playCount}}</div>
          </div>
          <!-- 标题 -->
          <div class="name block">{{item.name}}</div>
          <br>
          <!-- 作者 -->
          <div class="author">{{item.artistName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mv", "method"],
  data() {
    return {};
  },
  methods: {
    async click(event) {
      let mvid = event.target.id;
      let res = await this.method.get_mv_url(mvid);
      // console.log(res.data);获取的mv 数据
    }
  }
};
</script>

<style>
</style>
