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
    <h5 class="recommend_title mb-20">主力户型（4套）</h5>
    <div class="houseTypes">
      <div v-for="(item,index) in houseTypes" class="item" :key="index">
        <image :src="item.src" class="item-img"/>
        <div class="text1">{{item.name}}</div>
        <div class="text2">{{item.type}}</div>
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
      },
      markers: [{
        iconPath: '/resources/others.png',
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      houseTypes: [
        {
          src: '/static/images/house.png',
          name: '北入门A1',
          type: '4室4厅5卫'
        },
        {
          src: '/static/images/house.png',
          name: '北入门A1',
          type: '4室4厅5卫'
        },
        {
          src: '/static/images/house.png',
          name: '北入门A1',
          type: '4室4厅5卫'
        },
        {
          src: '/static/images/house.png',
          name: '北入门A1',
          type: '4室4厅5卫'
        }
      ]
    }
  },
  components: {
    'swiper': swiper,
    productList
  },
  onLoad (options) {
    wx.setNavigationBarTitle({
      title: options.house
    })
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
    .red
      color rgb(206 62 20)
      display inline
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
.houseTypes
  display flex
  justify-content space-around
  width 100%
  .item
    flex 1
    text-align center
    .item-img
      width 144rpx
      height 144rpx
    .text1
      font-size 30rpx
    .text2
      font-size 26rpx
      color #787878

</style>

