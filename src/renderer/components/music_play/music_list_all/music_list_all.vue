<template>
  <div class="music_list_all">
    <div class="waper clear">
      <span class="float_left">{{curent}}</span>
      <ul class="float_right block">
        <li
          v-for="(items,index) in data"
          :key="index"
          @click="setTag(items)"
          class="block"
        >{{items}}</li>
      </ul>
    </div>
  </div>
</template>
<script >
export default {
  props: ["lists"],
  data() {
    return { jingping_info: [], data: [], curent: "全部歌单" };
  },
  methods: {
    setTag(item) {
      this.lists.get_item(item);
      this.curent = item;
    }
  },
  async mounted() {
    let list = await this.$http("http://localhost:3000/playlist/catlist");
    let { data } = list;
    let ul_li = [];
    for (let i = 0; i < 10; i++) {
      ul_li.push(data.sub[i].name);
    }
    this.data = ul_li;
  }
};
</script>