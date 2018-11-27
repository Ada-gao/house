<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="stylus">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* padding: 200rpx 0; */
  box-sizing: border-box;
  padding-bottom 100rpx;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
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
    font-size 32rpx
.mb-20
  margin-bottom 20rpx
.fw-700
  font-weight 700
.submit-btn
  background-color #ce3e14
  margin 60rpx 30rpx
  border-radius 50rpx
  height 100rpx
  line-height 100rpx
  font-size 32rpx!important
</style>
