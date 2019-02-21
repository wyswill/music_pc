<template>
  <div class="music_play">
    <audio :src="url" controls="controls"></audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:
        "http://m10.music.126.net/20190216153838/b147c1e21f04c7388ffa843728d28c7c/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
    };
  }
};
</script>
<style>
@import url("./css/style.css");
</style>
