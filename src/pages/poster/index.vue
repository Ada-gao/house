<template>
  <div class="container">
    <div class="main">
      <img src="/static/images/poster.png" alt="">
      <button class="weui-btn submit-btn" type="warn">将图片保存到本地</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.container
  .main img
    width 690rpx
    height 920rpx
    margin 40rpx auto
  .weui-cells
    width 100%
    font-size 32rpx
    .weui-cell
      height 124rpx
      box-sizing border-box
</style>
