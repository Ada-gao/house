<template>
  <div class="container">
    <img src="/static/images/service.jpg" alt="">
    <div class="weui-cells weui-cells_after-title">
      <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__bd">律师服务</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
      <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__bd">收费标准</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
      <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__bd">招募信息</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
    </div>
    <!-- <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style lang="stylus">
.container
  img
    width 100%
    height 420rpx
    vertical-align text-top
  .weui-cells
    width 100%
    font-size 32rpx
    .weui-cell
      height 124rpx
      box-sizing border-box
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
