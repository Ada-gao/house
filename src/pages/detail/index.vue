<template>
  <div class="container">
    <swiper></swiper>
    <div class="main">
      <div class="roadInfo split">
        大江苑
        <p>松江区松江路999号</p>
      </div>
      <div class="houseInfo split">
        <div class="threeParam">
          <p class="paramTitle">{{isRent ? '租价' : '售价'}}</p>
          <p class="paramData">{{pData.totalPrice}}{{isRent ? '元/月' : '万元'}}</p>
        </div>
        <div class="threeParam">
          <p class="paramTitle">户型</p>
          <p class="paramData">{{pData.houseType}}</p>
        </div>
        <div class="threeParam">
          <p class="paramTitle">面积</p>
          <p class="paramData">{{pData.area}}㎡</p>
        </div>
      </div>
      <div class="houseDetail split">
        <div class="tag">
          标签：<i v-for="(item, i) in pData.tags" :key="i">{{item}}</i>
        </div>
        <div class="item-detail">
          <p>单价：{{pData.average}}元/㎡</p>
          <p>年代：{{pData.year}}</p>
        </div>
        <div class="item-detail">
          <p>楼层：{{pData.floor}}/{{pData.totalFloor}}</p>
          <p>产权：{{pData.property}}</p>
        </div>
        <div class="item-detail">
          <p>朝向：{{pData.orientation}}</p>
          <p>编号：{{pData.no}}</p>
        </div>
        <div class="item-detail">
          <p>装修：{{pData.decoration}}</p>
          <p>更新：{{pData.update}}</p>
        </div>
      </div>
    </div>
    <h5 class="recommend_title mb-20">位置及周边</h5>
    <map 
      id="map" 
      :markers="markers" 
      scale="14"
      latitude="23.099994"
      longitude="113.324520"
      show-location 
      style="width: 100%; height: 300rpx">
    </map>
    <h5 class="recommend_title" v-if="showRecommand">为你推荐</h5>
    <productList v-if="showRecommand"></productList>
    <div class="footer" v-if="showRecommand">
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
      },
      markers: [{
        // iconPath: '/resources/others.png',
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      isRent: false,
      showRecommand: true
    }
  },
  onLoad (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
    this.isRent = true
    if (options.from.includes('我的')) {
      this.showRecommand = false
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
</style>

