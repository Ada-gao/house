<template>
  <div class="container">
    <div class="main">
      <div class="weui-cells__title">房产信息</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">手机号</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入手机号" />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">小区名称</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder=" " />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">楼号</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder=" " />
          </div>
          <div class="weui-cell__hd">
            <div class="weui-label">房门号</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder=" " />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">委托类型</div>
          </div>
          <div class="weui-cell__bd">
            <span class="radio-btn">出售</span>
            <span class="radio-btn">出租</span>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">面积</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder=" " />
          </div>
          <div class="weui-cell__hd">
            <div class="weui-label">户型</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder=" " />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">价格（元/月）</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder=" " />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">是否唯一</div>
          </div>
          <div class="weui-cell__bd">
            <span class="radio-btn">是</span>
            <span class="radio-btn">否</span>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">产证满几年</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder=" " />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label w330">是否可随时看房</div>
          </div>
          <div class="weui-cell__bd">
            <span class="radio-btn">是</span>
            <span class="radio-btn">否</span>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label w330">什么时候方便接听电话</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="time" value="time" start="09:01" end="21:01" @change="bindTimeChange">
              <div class="weui-input">{{time}}</div>
            </picker>
          </div>
        </div>
      </div>
      <button class="weui-btn submit-btn" type="warn">提交</button>
    </div>
    <!-- <h5 class="recommend_title">位置及周边</h5>
    <h5 class="recommend_title">为你推荐</h5> -->
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
  padding 0 30rpx 130rpx
  box-sizing border-border-box
  .weui-cells
    font-size 32rpx
    .weui-cell_input
      padding-top 20rpx
      padding-bottom 20rpx
      .weui-label.w330
        width 330rpx
      .weui-cell__bd
        text-align right
  .submit-btn
    background-color #ce3e14
    margin 60rpx 30rpx
    border-radius 50rpx
    height 100rpx
    line-height 100rpx
  .radio-btn
    background-color rgb(230 230 230)
    display inline
    padding 10rpx 36rpx
    border-radius 36rpx
    outline-style none
    color rgb(120 120 120)
    margin-left 30rpx
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

