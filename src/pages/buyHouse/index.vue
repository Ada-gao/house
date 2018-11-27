<template>
  <div class="container">
    <div class="main">
      <div class="weui-cells weui-cells_after-title">
        <!-- <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label w330">是否有意向地址</div>
          </div>
          <div class="weui-cell__bd text-right">
            <span class="radio-btn">是</span>
            <span class="radio-btn">否</span>
          </div>
        </div> -->
        <div class="weui-cell weui-cell_switch">
          <div class="weui-cell__bd">是否有意向地址</div>
          <div class="weui-cell__ft">
            <switch checked @change = "switchChange"/>
          </div>
        </div>
        <div class="weui-cell weui-cell_switch" v-if="haveAddress">
          <div class="weui-cell__bd fw-700">有意向地址</div>
        </div>
        <div class="weui-cell weui-cell_input" v-if="haveAddress">
          <div class="weui-cell__bd">
            <input type="text" v-model="address" placeholder="输入具体地址快速查找意向房源信息">
          </div>
        </div>
      </div>
      <div class="condition" v-if="!haveAddress">
        <div class="condition-item range">
          <h5 class="recommend_title mb-20">您的购房预算</h5>
          <div class="range-title issues-content">{{form.sliderValueText||0}}万</div>
          <slider show-value :value="sliderValue" :min='sliderMin' :max='sliderMax' @change="sliderChange3" />
        </div>
        <div class="condition-item">
          <h5 class="recommend_title mb-20">您的意向户型</h5>
          <div class="weui-cells weui-cells_after-title">
            <checkbox-group @change="checkboxChange">
              <label class="weui-cell weui-check__label" v-for="(item,index) in checkboxItems" :key="index">
                <checkbox class="weui-check checkbox-item" :value="item.value" :checked="item.checked" />
                <div class="weui-cell__bd" :class="{red :item.checked}">{{item.name}}</div>
              </label>
            </checkbox-group>
          </div>
        </div>
        <div class="condition-item">
          <!-- <h5 class="recommend_title mb-20">意向区域（松江）</h5> -->
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_select">
              <div class="weui-cell__hd weui-cell__hd_in-select-after" style="white-space: nowrap; padding-left: 0">
                <div class="weui-label">意向区域（松江）</div>
              </div>
              <div class="weui-cell__bd" style="text-align: right">
                <picker title="松江" @change="bindCountryCodeChange" :range="countryCodes" range-key="label">
                  <div class="weui-select" style="border-right: none">{{countryCodes[countryCodesIndex].label}}</div>
                </picker>
              </div>
            </div>
          </div>
        </div>
        <div class="condition-item">
          <h5 class="recommend_title mb-20">房源标签</h5>
          <div class="weui-cells weui-cells_after-title">
            <checkbox-group @change="checkboxChange1">
              <label class="weui-cell weui-check__label" v-for="(item,index) in checkboxItems1" :key="index">
                <checkbox class="weui-check checkbox-item" :value="item.value" :checked="item.checked" />
                <div class="weui-cell__bd" :class="{red :item.checked}">{{item.name}}</div>
              </label>
            </checkbox-group>
          </div>
        </div>
        <div class="condition-item">
          <h5 class="recommend_title mb-20">楼高</h5>
          <div class="weui-cells weui-cells_after-title">
            <checkbox-group @change="checkboxChange2">
              <label class="weui-cell weui-check__label" v-for="(item,index) in checkboxItems2" :key="index">
                <checkbox class="weui-check checkbox-item" :value="item.value" :checked="item.checked" />
                <div class="weui-cell__bd" :class="{red :item.checked}">{{item.name}}</div>
              </label>
            </checkbox-group>
          </div>
        </div>
        <div class="condition-item">
          <h5 class="recommend_title mb-20">楼层区</h5>
          <div class="weui-cells weui-cells_after-title">
            <checkbox-group @change="checkboxChange3">
              <label class="weui-cell weui-check__label" v-for="(item,index) in checkboxItems3" :key="index">
                <checkbox class="weui-check checkbox-item" :value="item.value" :checked="item.checked" />
                <div class="weui-cell__bd" :class="{red :item.checked}">{{item.name}}</div>
              </label>
            </checkbox-group>
          </div>
        </div>
      </div>
      <button class="weui-btn submit-btn" type="warn" @click="submitHandle">确认</button>
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
      address: '',
      haveAddress: true,
      sliderValue: '0',
      sliderMin: 0,
      sliderMax: 1000,
      // sliderValueText: '',
      form: {
        sliderValueText: '',
        checked: [],
        checked1: [],
        checked2: [],
        checked3: []
      },
      checkedIndex: 0,
      checkedIndex1: 0,
      checkedIndex2: 0,
      checkedIndex3: 0,
      checkboxItems: [
        { name: '一室', value: '0', checked: false },
        { name: '两室', value: '1', checked: false },
        { name: '三室', value: '2', checked: false },
        { name: '四室', value: '3', checked: false },
        { name: '五室', value: '4', checked: false },
        { name: '五室以上', value: '5', checked: false }
      ],
      checkboxItems1: [
        { name: '满五唯一', value: '0', checked: false },
        { name: '满两年', value: '1', checked: false },
        { name: '南北通透', value: '2', checked: false },
        { name: '无贷款', value: '3', checked: false },
        { name: '电梯房', value: '4', checked: false },
        { name: '近地铁', value: '5', checked: false },
        { name: '近学校', value: '6', checked: false }
      ],
      checkboxItems2: [
        { name: '多层', value: '0', checked: false },
        { name: '小高层', value: '1', checked: false },
        { name: '高层', value: '2', checked: false }
      ],
      checkboxItems3: [
        { name: '非顶楼', value: '0', checked: false },
        { name: '非底楼', value: '1', checked: false }
      ],
      countryCodes: [
        {label: '不限', value: '0'},
        {label: '南九亭', value: '1'},
        {label: '松江新城', value: '2'},
        {label: '泗泾', value: '3'},
        {label: '佘山', value: '4'},
        {label: '松江老城', value: '5'}
      ],
      countryCodesIndex: 0
    }
  },
  components: {
    'swiper': swiper,
    productList
  },
  methods: {
    switchChange (e) {
      console.log('switch发生change事件，携带value值为：' + e.mp.detail.value)
      this.haveAddress = e.mp.detail.value
    },
    submitHandle () {
      if (this.address && this.haveAddress) {
        // 提交
        wx.navigateTo({ url: '/pages/findList/main?address=' + this.address })
      } else if (!this.haveAddress) {
        console.log(this.form)
        wx.navigateTo({ url: '/pages/findList/main?obj=' + JSON.stringify(this.form) })
      }
    },
    sliderChange3 (e) {
      this.sliderValue = e.mp.detail.value
      this.form.sliderValueText = `${e.mp.detail.value}`
    },
    checkboxChange (e) {
      let index = 0
      console.log('checkbox发生change事件，携带value值为：' + e.mp.detail.value)
      var checkboxItems = this.checkboxItems
      var values = e.mp.detail.value
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true
            this.form.checked[index] = checkboxItems[i].name
            index++
            break
          }
        }
      }
      this.checkboxItems = checkboxItems
    },
    checkboxChange1 (e) {
      let index = 0
      console.log('checkbox发生change1事件，携带value值为：' + e.mp.detail.value)
      var checkboxItems = this.checkboxItems1
      var values = e.mp.detail.value
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true
            this.form.checked1[index] = checkboxItems[i].name
            index++
            break
          }
        }
      }
      this.checkboxItems1 = checkboxItems
    },
    checkboxChange2 (e) {
      let index = 0
      console.log('checkbox发生change2事件，携带value值为：' + e.mp.detail.value)
      var checkboxItems = this.checkboxItems2
      var values = e.mp.detail.value
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true
            this.form.checked2[index] = checkboxItems[i].name
            index++
            break
          }
        }
      }
      this.checkboxItems2 = checkboxItems
    },
    checkboxChange3 (e) {
      let index = 0
      console.log('checkbox发生change3事件，携带value值为：' + e.mp.detail.value)
      var checkboxItems = this.checkboxItems3
      var values = e.mp.detail.value
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true
            this.form.checked3[index] = checkboxItems[i].name
            index++
            break
          }
        }
      }
      this.checkboxItems3 = checkboxItems
    },
    bindCountryCodeChange (e) {
      this.countryCodesIndex = e.mp.detail.value
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  padding 0 30rpx
  box-sizing border-box
  .h124 {
    height 124rpx
    box-sizing border-box
  }
  .text-right
    text-align right
  .weui-cells
    font-size 32rpx
    .weui-cell
      height 124rpx
      box-sizing border-box
    .weui-cell_input
      padding-top 20rpx
      padding-bottom 20rpx
      .weui-label.w330
        width 330rpx
  .radio-btn
    background-color rgb(230 230 230)
    display inline
    padding 10rpx 36rpx
    border-radius 36rpx
    outline-style none
    color rgb(120 120 120)
    margin-left 30rpx
  .condition
    .condition-item
      padding-top 10rpx
      padding-bottom 10rpx
      border-bottom 2rpx solid #e6e6e6
      .weui-cells:before
        border-top none
      .weui-cells:after
        border-bottom none
      .recommend_title
        font-size 36rpx
        padding-top 10rpx
        padding-bottom 10rpx
        font-weight 700
      .range-title
        text-align center
        color #ce3e14
        font-size 32rpx
      checkbox-group
        display flex
        flex-wrap wrap
        &:before
          border-top none
        &:after
          border-bottom none
        .weui-check__label
          padding-left 0
          background-color #fff
          height 104rpx
          &:before
            border-top none
          .weui-cell__bd
            padding 10rpx 20rpx
            background-color #e6e6e6
            color #787878
            border-radius 50rpx
          .red
            background-color #ce3e14
            color #fff
</style>

