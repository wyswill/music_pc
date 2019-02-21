<template>
  <div class="newMusic">
    <div class="waper">
      <div class="title">最新音乐</div>
      <div class="list">
        <ul>
          <li v-for="(item ,index) in newMusic" :key="index">
            <img :src="item.blurPicUrl" :id="item.id">
            <div class="song_info clear block">
              <h2>{{item.songeName}}</h2>
              <p>{{item.artists}}</p>
              <div class="play" v-if="is_can_play">
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
  data() {
    return {
      list: [1, 23, 123, 12, 3],
      is_can_play: true
    };
  },
  props: ["newMusic", "method"]
};
</script>
