<template>
  <div class="newMusic zhubo">
    <div class="waper">
      <div class="title " style="cursor: pointer;" @click="method.to_list('zhuBo')">主播电台</div>
      <div class="list">
        <ul>
          <li v-for="(item ,index) in zhubo_info" :key="index">
            <img :src="item.picUrl" :id="item.id">
            <div class="song_info clear block">
              <h2>{{item.name}}</h2>
              <p>{{item.copywriter}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["zhubo_info", "method"]
};
</script>

<style>
</style>
