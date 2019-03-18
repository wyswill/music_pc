<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="banner.length">
    <div class="swiper-pagination" slot="pagination"></div>
    <swiper-slide v-for="item in banner" :key="item.id">
      <img :src="item.imageUrl">
      <span>{{item.typeTitle}}</span>
    </swiper-slide>
  </swiper>
</template>

<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

let vm;
export default {
  props: ["banner", "method"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: "horizontal", // 垂直切换选项
        loop: true,
        autoplay: true,
        parallax: true,
        preventClicksPropagation: true,
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          click: async function() {
            let index = this.realIndex; //获取每个轮播图的下标
            let { targetId, typeTitle, url } = vm.get_song_info(index);
            //  url, typeTitle
            // 是歌曲的话直接播放
            if (
              typeTitle == "独家" ||
              typeTitle == "独家首发" ||
              typeTitle == "新歌首发"
            ) {
              // 直接播放音乐
              await vm.method.play(targetId);
              return;
            } else {
              let data = targetId ? targetId : url;
              vm.method.to_list("showInfo", { data });
            }
            return;
          }
        }
      }
    };
  },
  methods: {
    get_song_info(index) {
      return this.banner[index];
    }
  },
  async created() {
    vm = this;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>