<template>
<div class="modular">
  <ModularTitle v-bind:icon='icon' v-bind:titleText="titleText"/>
  <!-- <Layouts :resData="resData" /> -->
  <el-row :gutter="10">
    <el-col v-for="(item,index) in resData" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :key="index" class="listObject">
      <label>{{item.label}}:</label> {{report[item.value]}}
    </el-col>
  </el-row>
</div>
</template>
<script>
import ModularTitle from './modularTitle'
import Icon from '@/assets/images/testingRes.png'
// import Layouts from '@/components/tablet/layouts'
export default {
  name: 'TestingRes',
  components: {
    ModularTitle
    // Layouts
  },
  props: {
    report: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    report: {
      handler (cur, old) {
        this.report = cur
      },
      deep: true
    }
  },
  data () {
    return {
      msg: '检测结果',
      icon: Icon,
      titleText: '检测结果',
      resData: [
        {
          label: '报告编号',
          value: 'sn'
        },
        {
          label: '检测系统',
          value: 'systemCount'
        },
        {
          label: '检测时间',
          value: 'createDate'
        },
        {
          label: '异常系统',
          value: 'faultCount'
        },
        {
          label: '检测结论',
          value: '车况良好（存在故障）'
        },
        {
          label: '正常系统',
          value: 'normalCount'
        }
      ]
    }
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
