<template>
  <div class="recommend_list">
    <div class="recommend_item"
      v-for="(item, index) in recommendList"
      :key="index"
      @click="handleDetail">
      <div class="left_img">
        <img class="left_img" :src="item.imgSrc" alt="">
      </div>
      <!-- <img class="left_img" :src="item.imgSrc" alt="" style="width: 100%"> -->
      <div class="right_info">
        <div class="main_info">
          {{item.houseType}}
          <i class="sale_tag">{{item.saleStatus}}</i>
        </div>
        <div class="second_info">{{item.houseSize}}</div>
        <div class="third_info">
          <i class="address">{{item.address}}</i>
          <i class="price">{{item.totalPrice}}万</i>
        </div>
        <div class="tags_info">
          <i class="tag" v-for="(tag, idx) in item.houseTag" :key="idx">{{tag}}</i>
          <i class="average">均价{{item.averagePrice}}元/㎡</i>
        </div>
      </div>
      <div class="split"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommendList: [
        {
          imgSrc: '/static/images/default.jpg',
          houseType: '合生广富汇',
          saleStatus: '在售',
          houseSize: '松江 - 松江新城',
          address: '',
          houseTag: ['小洋房', '带花园'],
          totalPrice: '500',
          averagePrice: '50000'
        }, {
          imgSrc: '/static/images/default.jpg',
          houseType: '合生广富汇',
          saleStatus: '售完',
          houseSize: '松江 - 松江新城',
          address: '',
          houseTag: ['小洋房', '带花园'],
          totalPrice: '500',
          averagePrice: '50000'
        }
      ]
    }
  },
  methods: {
    handleDetail () {
      wx.navigateTo({url: '/pages/newDetail/main'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend_list
  width 100%
  .recommend_item
    position relative
    display flex
    padding 30rpx
    .split
      position absolute
      bottom 0
      width 690rpx
      height 1rpx
      border-bottom 1rpx solid rgb(230 230 230)
    .left_img
      width 160rpx
      height 165rpx
      border-radius 10rpx
      margin-right 20rpx
    .right_info
      width 100%
      .main_info
        font-size 32rpx
        .sale_tag
          background-color rgb(206 62 20)
          color #ffffff
          font-size 26rpx
          display inline
          padding 2rpx 6rpx
      .second_info,
      .third_info,
      .tags_info
        font-size 26rpx
      .third_info
        display flex
        justify-content space-between
        .price
          display inline
          color rgb(206 62 20)
          font-size 32rpx
        .address
          display inline
          color rgb(80 80 80)
      .tags_info
        position relative
        .tag
          border 1px solid rgb(218, 178, 115)
          color rgb(218, 178, 115)
          display inline
          padding 5rpx 8rpx
          margin-right 10rpx
          border-radius 4rpx
        .average
          color rgb(80 80 80)
          position absolute
          right 0
          top 0
</style>


