<template>
  <div class="container">
    <swiper></swiper>
    <div class="main">
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">是否有意向地址</div>
          </div>
          <div class="weui-cell__bd">
            <span class="radio-btn">出售</span>
            <span class="radio-btn">出租</span>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">是否有意向地址</div>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__bd">
            <span class="radio-btn">出售</span>
            <span class="radio-btn">出租</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>某某某<i>经纪人</i></p>
      <button>电话联系</button>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/swiper/swiper'
import productList from '@/components/productList/productList'

export default {
  data () {
    return {
      pData: {
        totalPrice: 4000,
        houseType: '四居室',
        area: '123',
        average: '5243',
        year: '1999年',
        floor: '3F',
        totalFloor: '20F',
        property: '70年',
        orientation: '朝南',
        no: '1234',
        decoration: '精装',
        update: '2018年',
        tags: ['新增房源', '满2年']
      }
    }
  },

  components: {
    'swiper': swiper,
    productList
  }
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  padding 0 30rpx
  box-sizing border-box
  .split
    border-bottom 1px solid #ccc
  .roadInfo
    padding 30rpx 0
    p
      font-size 28rpx
  .houseInfo
    display flex
    padding 30rpx 0
    .threeParam
      flex 1
      text-align center
      .paramTitle
        font-size 32rpx
      .paramData
        color #ce3e14
        font-size 36rpx
  .houseDetail
    padding 30rpx 0
    font-size 28rpx
    .tag i
      border 1px solid rgb(218, 178, 115)
      color rgb(218, 178, 115)
      display inline
      padding 5rpx 8rpx
      margin-right 10rpx
      border-radius 4rpx
    .item-detail
      display flex
      p
        flex 1
.recommend_title
  font-size 36rpx
  padding-left 60rpx
  margin-top 20rpx
  font-weight bold
  text-align left
  width 100%
.footer
  display flex
  position fixed
  bottom 0
  width 100%
  font-size 32rpx
  height 100rpx
  line-height 100rpx
  p
    flex 3
    border-top 1rpx solid #ccc
    padding-left 30rpx
    background-color #fff
    i
      color rgb(120 120 120)
      display inline
      margin-left 20rpx
  button
    flex 1
    background-color #ce3e14
    color #ffffff
    border-radius 0
    border none
    line-height 100rpx
</style>

