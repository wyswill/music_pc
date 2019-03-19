<template>
  <div class="newMusic">
    <div class="waper">
      <div class="title">
        <router-link to="/newMusic">
          <h3 class="block" style="cursor: pointer;">最新音乐</h3>
        </router-link>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item ,index) in newMusic" :key="index">
            <img :src="item.blurPicUrl" @click="click(item.id)">
            <div class="song_info clear block">
              <h2>{{item.songeName}}</h2>
              <p>{{item.artists}}</p>
              <div :class="is_play" v-if="is_can_play" @click="click(item.id)">
                <img src="../../../assets/image/play.png" alt>
              </div>
              <div class="moive" :mvid="item.mvid" v-if="item.mvid">
                <img src="../../../assets/image/moive.png" alt>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["newMusic", "method"],
  data() {
    return {
      list: [1, 23, 123, 12, 3],
      is_can_play: true,
      is_play: {
        play: true
      }
    };
  },
  methods: {
    click(id) {
      this.method.play(id);
    }
  }
};
</script>
