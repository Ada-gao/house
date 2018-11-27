<template>
  <swiper class="swiperList"
    indicator-dots="true"
    indicator-color="#fff"
    indicator-active-color="#ce3e14">
    <!-- <swiper-item v-for="(item, index) in imgUrls" :key="index">
      <image :src="item.src" class="swiper-image"></image>
    </swiper-item> -->
    <swiper-item>
      <img class="swiper-image" src="/static/images/main.jpg" alt="">
    </swiper-item>
    <swiper-item>
      <img class="swiper-image" src="/static/images/main.jpg" alt="">
    </swiper-item>
    <swiper-item>
      <img class="swiper-image" src="/static/images/main.jpg" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      imgSrc: '/static/images/main.jpg',
      imgUrls: [
        {
          name: '二手房',
          src: '/static/images/main.jpg',
          link: '/pages/secHand/main'
        }, {
          name: '新房',
          src: '/static/images/main.jpg',
          link: '/pages/newHouse/main'
        }, {
          name: '租房',
          src: '/static/images/main.jpg',
          link: '/pages/secHand/main'
        }, {
          name: '房东委托',
          src: '/static/images/main.jpg',
          link: '/pages/entrust/main'
        }, {
          name: '买房专家',
          src: '/static/images/main.jpg',
          link: '/pages/buyHouse/main'
        }
      ]
    }
  },
  methods: {
    switchItem: function (prompt, res) {
      console.log(prompt, res)
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.swiperList
  width 100%
  height 350rpx
  swiper-item
    width: 100%;
    height 100%
  .swiper-image 
    width 100%
    height 100%
</style>
