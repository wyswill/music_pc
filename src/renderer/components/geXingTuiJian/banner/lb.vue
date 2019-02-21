<template>
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in banner" :key="item.id">
        <img :src="item.imageUrl" alt>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>-->
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" v-if="banner.length">
    <div class="swiper-pagination" slot="pagination"></div>
    <swiper-slide v-for="item in banner" :key="item.id">
      <img :src="item.imageUrl" alt>
    </swiper-slide>
  </swiper>
</template>

<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

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
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {
    callback() {}
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>