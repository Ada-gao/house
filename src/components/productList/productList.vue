<template>
  <div class="recommend_list">
    <div class="recommend_item"
      v-for="(item, index) in recommendList"
      :key="index"
      @click="handleDetail(item)">
      <div class="left_img">
        <img class="left_img" :src="item.imgSrc" alt="">
      </div>
      <!-- <img class="left_img" :src="item.imgSrc" alt="" style="width: 100%"> -->
      <div class="right_info">
        <div class="main_info">{{item.houseType}}</div>
        <div class="second_info">{{item.houseSize}}</div>
        <div class="third_info">
          <i class="address">{{item.address}}</i>
          <i class="price">{{item.totalPrice}}</i>
        </div>
        <div class="tags_info">
          <i class="tag" v-for="(tag, idx) in item.houseTag" :key="idx">{{tag}}</i>
          <i class="average">{{item.averagePrice}}</i>
        </div>
      </div>
      <div class="split"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fromName: {
      type: String,
      default: '二手房'
    }
  },
  data () {
    return {
      recommendList: [
        {
          imgSrc: '/static/images/default.jpg',
          houseType: '大江苑 3居 朝南 电梯房',
          houseSize: '3室2厅2卫 100平 24/26F',
          address: '大江苑',
          houseTag: ['新增房源', '满2年'],
          totalPrice: '500万',
          averagePrice: '50000元/㎡'
        }, {
          imgSrc: '/static/images/default.jpg',
          houseType: '大江苑-1 3居 朝南 电梯房',
          houseSize: '3室2厅2卫 100平 24/26F',
          address: '大江苑',
          houseTag: ['新增房源', '满2年'],
          totalPrice: '500万',
          averagePrice: '50000元/㎡'
        }, {
          imgSrc: '/static/images/default.jpg',
          houseType: '大江苑-2 3居 朝南 电梯房',
          houseSize: '3室2厅2卫 100平 24/26F',
          address: '大江苑',
          houseTag: ['新增房源', '满2年'],
          totalPrice: '500万',
          averagePrice: '50000元/㎡'
        }, {
          imgSrc: '/static/images/default.jpg',
          houseType: '大江苑-3 3居 朝南 电梯房',
          houseSize: '3室2厅2卫 100平 24/26F',
          address: '大江苑',
          houseTag: ['新增房源', '满2年'],
          totalPrice: '500万',
          averagePrice: '50000元/㎡'
        }, {
          imgSrc: '/static/images/default.jpg',
          houseType: '大江苑-4 3居 朝南 电梯房',
          houseSize: '3室2厅2卫 100平 24/26F',
          address: '大江苑',
          houseTag: ['新增房源', '满2年'],
          totalPrice: '500万',
          averagePrice: '50000元/㎡'
        }, {
          imgSrc: '/static/images/default.jpg',
          houseType: '大江苑-5 3居 朝南 电梯房',
          houseSize: '3室2厅2卫 100平 24/26F',
          address: '大江苑',
          houseTag: ['新增房源', '满2年'],
          totalPrice: '500万',
          averagePrice: '50000元/㎡'
        }, {
          imgSrc: '/static/images/default.jpg',
          houseType: '大江苑-6 3居 朝南 电梯房',
          houseSize: '3室2厅2卫 100平 24/26F',
          address: '大江苑',
          houseTag: ['新增房源', '满2年'],
          totalPrice: '500万',
          averagePrice: '50000元/㎡'
        }
      ]
    }
  },
  methods: {
    handleDetail (item) {
      console.log(item.houseType)
      wx.navigateTo({url: `/pages/detail/main?title=${item.houseType}&from=${this.fromName}`})
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
      .second_info,
      .third_info,
      .tags_info
        font-size 26rpx
      .third_info
        .price
          display inline
          float right
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


