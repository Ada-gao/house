<template>
  <div class="container">
    <div class="top">
      <img class="mainImg" :src="imgSrc" alt="">
      <div class="search">
        <div class="sort"></div>
        <input class="inputing" type="text" placeholder="请输入小区名">
      </div>
    </div>
    <grid></grid>
    <!-- <swiper></swiper> -->
    <!-- <scroll-view> -->
    <h5 class="recommend_title">为你推荐</h5>
    <productList></productList>
    <div class="recommend_list">
      <div class="recommend_item" v-for="(item, index) in recommendList" :key="index">
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
    <!-- </scroll-view> -->
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div> -->
    <!-- <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div> -->

    <!-- <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import card from '@/components/card'
import grid from '@/components/grid/grid'
import sortList from '@/components/sortList/sortList'
import productList from '@/components/productList/productList'
import swiper from '@/components/swiper/swiper'

export default {
  data () {
    return {
      userInfo: {},
      imgSrc: '/static/images/main.jpg',
      grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      sortList: [
        {
          sort: '浦东新区',
          image: ''
        }, {
          sort: '杨浦区',
          image: ''
        }, {
          sort: '徐汇区',
          image: ''
        }, {
          sort: '普陀区',
          image: ''
        }
      ],
      isHidden: false,
      selected: null
    }
  },

  components: {
    card,
    grid,
    sortList,
    productList,
    swiper
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
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
        title: '待完善',
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

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang="stylus" scoped>
.container
  width: 100%
  height: 100%
  .top
    width 100%
    position relative
    margin-bottom 40rpx
    .mainImg
      width 100%
      height 280rpx
    .search
      width 690rpx
      height 80rpx
      border 1rpx solid rgb(230 230 230)
      border-radius 40rpx
      position absolute
      bottom -30rpx
      left 50%
      transform translateX(-50%)
      background-color #fff
      padding 20rpx 0
      box-sizing border-box
      display flex
      font-size 28rpx
      .sort
        flex 1
        border-right 1rpx solid rgb(230 230 230)
      .inputing
        flex 2.5
        text-indent 68rpx
        margin-top -5rpx
  .mask
    overflow hidden
    position fixed
    z-index 999
    width 100%
    height 100%
    background-color rgba(15, 15, 26, 0.7)
    .overall-sort-list,.filterList,.filterList-footer
      background: white
    .overall-sort-list
      flex-direction column
      border-top 1rpx solid rgba(0,0,0,0)
      display flex
      .overall-sort
        font-size 25rpx
        height 70rpx
        line-height 70rpx
        margin-left 30rpx
  .select
    margin-bottom 30rpx
    width: 100%
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
  .recommend_title
    font-size 36rpx
    padding-left 60rpx
    margin-top 20rpx
    font-weight bold
    text-align left
    width 100%
</style>
