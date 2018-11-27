<template>
  <div class="container">
    <div class="main">
      <!-- <div class="weui-cells__title">房产信息</div> -->
      <div class="weui-cells weui-cells_after-title" v-if="address">
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">{{address}}</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
      </div>
      <div class="weui-cells weui-cells_after-title" v-else>
        <navigator url="" class="weui-cell_access flex" hover-class="weui-cell_active">
          <p class="flex-item">预算：{{form.sliderValueText}}万元</p>
          <p class="flex-item">户型：<span v-for="(item, index) in form.checked" :key="index">{{item}} </span></p>
          <p class="flex-item">位置：{{}}</p>
          <p class="flex-item">喜欢：<span v-for="(item, index) in form.likeList" :key="index">{{item}}<span v-if="index < form.likeList.length - 1">、</span></span></p>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
      </div>
      <div class="condition-item">
        <h5 class="recommend_title fw-700 mb-20">您的找房需求已收到</h5>
        <p class="sec_title">为方便您的经纪人帮您找到合适的房源，请留下您的手机号</p>
      </div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <input type="text" v-model="mobile" placeholder="请输入手机号">
          </div>
        </div>
      </div>
      <button class="weui-btn submit-btn" type="warn">提交</button>
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
      },
      time: '',
      address: '',
      form: {}
    }
  },
  components: {
    'swiper': swiper,
    productList
  },
  onLoad (options) {
    console.log(options)
    if (options.address) {
      this.address = options.address
    } else {
      this.form = JSON.parse(options.obj)
      this.form.likeList = [...this.form.checked1, ...this.form.checked2, ...this.form.checked3]
    }
  },
  methods: {
    bindTimeChange (e) {
      // console.log(e)
      this.time = e.target.value
      console.log(this.time)
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  padding 0 30rpx 130rpx
  box-sizing border-box
  .position-r {
    position relative
  }
  .split-line {
    position absolute
    width 4rpx
    height 100%
    background-color rgb(230 230 230)
    left -30rpx
  }
  .weui-cells
    font-size 32rpx
    .weui-cell
      height 124rpx
      box-sizing border-box
      padding 0
    .weui-cell_input
      padding-top 20rpx
      padding-bottom 20rpx
      .weui-label.w330
        width 330rpx
      .weui-cell__bd
        text-align right
    .flex
      display flex
      flex-direction column
      padding-top 40rpx
      padding-bottom 40rpx
      .flex-item
        width 100%
        line-height 40rpx
      .weui-cell__ft
        position absolute
        top 50%
        right 10rpx
        font-size 32rpx
        height 32rpx
        width 16rpx
  .condition-item
    padding-top 10rpx
    padding-bottom 10rpx
    .weui-cells:before
      border-top none
    .weui-cells:after
      border-bottom none
    .recommend_title
      font-size 36rpx
      padding-top 10rpx
      padding-bottom 10rpx
      font-weight 700
    .sec_title
      font-size 28rpx
      color #323232
      line-height 44rpx
</style>
