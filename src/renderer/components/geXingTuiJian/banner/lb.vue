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
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

let vm;
export default {
  props: ["banner"],
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
            // 是歌曲的话直接播放
            if (
              typeTitle == "独家" ||
              typeTitle == "独家首发" ||
              typeTitle == "新歌首发"
            ) {
              // 直接播放音乐
              await vm.api.play(targetId);
              return;
            } else if (typeTitle == "热歌推荐") {
              let id = targetId ? targetId : url;
            } else {
              let data = targetId ? targetId : url;
              vm.api.to_list("showInfo", vm.$router, { data });
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
  async mounted() {
    vm = this;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>