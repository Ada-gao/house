<template>
  <div class="container">
    <swiper></swiper>
    <div class="main">
      <div class="roadInfo split">
        <i style="font-weight: 400">大江苑</i>
        <p>参考均价 <i class="red">40000元/㎡</i></p>
        <p>参考总价 <i class="red">1100-1500万元</i></p>
      </div>
      <div class="houseDetail split">
        <div class="tag">
          标签：<i v-for="(item, i) in pData.tags" :key="i">{{item}}</i>
        </div>
        <div class="item-detail">
          <p>开盘日期：{{pData.saleDate}}</p>
        </div>
        <div class="item-detail">
          <p>产权年限：{{pData.property}}</p>
        </div>
        <div class="item-detail">
          <p>交房日期：{{pData.upDate}}</p>
        </div>
        <div class="item-detail">
          <p>开发商：{{pData.company}}</p>
        </div>
      </div>
    </div>
    <h5 class="recommend_title">主力户型（4套）</h5>
    <h5 class="recommend_title">位置及周边</h5>
    <h5 class="recommend_title">为你推荐</h5>
    <productList></productList>
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
        property: '70年',
        saleDate: '朝南',
        upDate: '2018-09',
        company: '上海合生锦廷房地产开发有限公司',
        tags: ['小洋房']
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
      font-size 32rpx
    .red {
      color rgb(206 62 20)
      display inline
    }
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

