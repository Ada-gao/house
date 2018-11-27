<template>
  <div class="container">
    <!-- 综合排序 -->
    <div class="mask" v-if="isHidden && fromName !== '我的'" @click="mask1Cancel">
      <sortList :sortData="sortList"></sortList>
      <div class="overall-sort-list">
        <div v-for="(item,index) in sortList" :key="index">
          <div class="overall-sort" @click="sortSelected">{{item.sort}}</div>
        </div> 
      </div>
    </div>
    <div class="search" v-if="fromName !== '我的'">
      <icon class="search_icon" type="search"></icon>
      <input class="search_input" type="text" placeholder="请输入小区">
    </div>
    <div class="select" v-if="fromName !== '我的'">
      <div class="sort-list">
        <div class="sort" @click="onOverallTag">区域{{sortSelected}}
        <image src="/static/images/down.png" style="width:20rpx;height:20rpx;"/></div>
        <div :data-index="0" @click="onTapTag" class="sort " :class="{'sort-active': selected == 0}">售价</div>
        <div :data-index="1" @click="onTapTag" class="sort" :class="{'sort-active': selected == 1}">户型</div>
        <div class="sort" @click="onFilter">面积
          <image src="/static/images/screen.png" style="width:22rpx;height:22rpx;"/>
        </div>
      </div>
    </div>
    <productList :from-name="fromName"></productList>
  </div>
</template>

<script>
import sortList from '@/components/sortList/sortList'
import productList from '@/components/productList/productList'

export default {
  data () {
    return {
      sortList: [
        {
          sort: '浦东新区',
          image: ''
        }, {
          sort: '速度最快',
          image: ''
        }, {
          sort: '评分最高',
          image: ''
        }, {
          sort: '起送价最低',
          image: ''
        }, {
          sort: '配送费最低',
          image: ''
        }
      ],
      isHidden: false,
      selected: null,
      fromName: ''
    }
  },

  components: {
    sortList,
    productList
  },

  methods: {
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    onOverallTag () {
      this.isHidden = !this.isHidden
      console.log(this.isHidden)
    },
    mask1Cancel () {
      this.isHidden = false
    },
    onTapTag (e) {
      this.selected = e.currentTarget.dataset.index
    },
    onFilter () {
      wx.showToast({
        title: '代完善',
        icon: 'success',
        duration: 2000
      })
    },
    sortSelected () {
      this.isHidden = false
      this.$http.get('sell#!method=get').then((res) => {
        this.restaurant = res.data.data.select
      })
    }
  },
  onLoad (options) {
    this.fromName = options.from
    if (options.from.includes('租房')) {
      wx.setNavigationBarTitle({
        title: '租房'
      })
      this.sortList = '租房搜索'
    } else if (options.from.includes('我的')) {
      wx.setNavigationBarTitle({
        title: '我的房子'
      })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  .search
    width 100%
    padding 8rpx 30rpx
    background-color #eee
    box-sizing border-box
    position relative
    .search_icon
      position absolute
      left 55rpx
      top 50%
      transform translateY(-50%)
      font-size 28rpx
    .search_input
      border 1rpx solid #ccc
      border-radius 50rpx
      background-color #fff
      padding-left 80rpx
      height 80rpx
      font-size 28rpx
  .select
    width 100%
    .sort-list
      justify-content space-around
      display flex
      background white
      width 100%
      height 80rpx
      font-size 27rpx
      color #6A6A6A
      align-content center
      border 1rpx solid #ECECEC
      .sort
        text-align center
        margin auto 0
        height 30rpx
        line-height 30rpx
        border-right 1rpx solid #ECECEC;
        flex 1
        .overall-sort
          font-size 25rpx
          height 70rpx
          line-height 70rpx
          margin-left 30rpx
        .sort-active
          color black
          font-weight: 800
    
</style>
