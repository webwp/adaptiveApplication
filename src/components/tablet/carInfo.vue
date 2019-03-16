<template>
<div class="modular">
  <ModularTitle v-bind:icon='icon' v-bind:titleText="titleText"/>
  <!-- <Layouts :resData="resData" /> -->
  <el-row :gutter="10">
    <el-col v-for="(item,index) in resData" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :key="index" class="listObject">
      <label>{{item.label}}:</label> {{carInfo[item.value]}}
    </el-col>
  </el-row>
</div>
</template>
<script>
import ModularTitle from './modularTitle'
import Icon from '@/assets/images/carInfo.png'
// import Layouts from '@/components/tablet/layouts'
export default {
  name: 'CarInfo',
  components: {
    ModularTitle
    // Layouts
  },
  props: {
    carInfo: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    carInfo: {
      handler (cur, old) {
        // console.log('carInfo', this.carInfo)
        // this.resData = cur
      },
      deep: true
    }
  },
  data () {
    return {
      msg: '车辆信息',
      icon: Icon,
      titleText: '车辆信息',
      titleList: ['车辆识别代号(VIN)', '车型', '品牌'],
      resData: [
        {
          label: '车辆识别代号(VIN)',
          value: 'vin'
        },
        {
          label: '车型',
          value: 'series'
        },
        {
          label: '品牌',
          value: 'brand'
        }
      ]
    }
  },
  mounted () {
    console.log('carInfo', this.carInfo)
    // this.resData = this.carInfo
  },
  methods: {

  }
}
</script>
<style scoped>
.listObject {font-size: .32rem; line-height:.64rem; color:#333}
.listObject label { color:#999; margin-right:.1rem}
.el-row {margin-top:.4rem}
</style>
