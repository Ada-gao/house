<template>
  <!-- <swiper class="categoryList" :autoplay="true" :circular="true" :indicator-dots="true" indicator-color="rgba(228,228,228,1)" indicator-active-color="#FECA49"> -->
    <!-- <swiper-item v-for="(items,i) in categoryList" :key="i"> -->
    <div class="categoryList">
      <div v-for="(item,index) in categoryList.pageone" class="category-info" :key="index" @click="choose(item)">
        <image :src="item.src"  classs="category-image"/>
        <div class="category-text">{{item.name}}</div>
      </div>
    </div>
    <!-- </swiper-item> -->
  <!-- </swiper> -->
</template>

<script>
export default {
  data () {
    return {
      categoryList: {
        pageone: [{
          name: '二手房',
          src: '/static/images/2.png',
          link: '/pages/secHand/main'
        }, {
          name: '新房',
          src: '/static/images/2.png',
          link: '/pages/newHouse/main'
        }, {
          name: '租房',
          src: '/static/images/3.png',
          link: '/pages/secHand/main'
        }, {
          name: '房东委托',
          src: '/static/images/4.png',
          link: '/pages/entrust/main'
        }, {
          name: '买房专家',
          src: '/static/images/5.png',
          link: '/pages/buyHouse/main'
        }]
      }
    }
  },
  methods: {
    choose (item) {
      wx.navigateTo({
        url: `${item.link}?from=${item.name}`
      })
      // wx.showToast({
      //   title: '代完善',
      //   icon: 'success',
      //   duration: 2000
      // })
    }
  }
}
</script>

<style lang="stylus" scoped>
    .categoryList
        width 100%
        height 232rpx
        box-sizing: border-box
        border-bottom:20rpx solid #f4f4f4; 
        .category-info
            display inline-block
            text-align center
            position relative
            margin-top 40rpx
            width 20%
            height 150rpx
            image 
                width 95rpx
                height 95rpx
            .category-text
                font-size 25rpx
                width 100%
                line-height 30rpx
</style>
