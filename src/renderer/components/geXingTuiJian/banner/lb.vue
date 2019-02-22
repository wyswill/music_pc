<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="banner.length">
    <div class="swiper-pagination" slot="pagination"></div>
    <swiper-slide v-for="item in banner" :key="item.id">
      <img :src="item.imageUrl">
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
            let targetId = vm.get_song_info(index);
            vm.method.to_list("showInfo", { targetId });
          }
        }
      }
    };
  },
  methods: {
    get_song_info(index) {
      return this.banner[index].targetId;
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