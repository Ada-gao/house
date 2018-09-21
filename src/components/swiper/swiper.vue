<template>
  <swiper class="swiperList">
    <swiper-item v-for="(item, index) in imgUrls" :key="index">
      <image :src="item.src" class="swiper-image"/>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
        {
          src: '/static/images/default.jpg'
        }, {
          src: '/static/images/main.jpg'
        }, {
          src: '/static/images/main.jpg'
        }, {
          src: '/static/images/main.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiperList
  width 100%
  height 350rpx
  .swiper-image 
    width 100%
    height 350rpx
</style>
