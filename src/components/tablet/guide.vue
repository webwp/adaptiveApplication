<template>
<div class="modular">
  <ModularTitle v-bind:icon='icon' v-bind:titleText="titleText"/>
  <!-- <Layouts :resData="resData" /> -->
  <el-row :gutter="10" class="cus-row-guide">
    <el-col :span="12">
      <img src="../../assets/images/Assistor.png" style="height:2.74rem;width:6.2rem" />
    </el-col>
    <el-col :span="6">
      <img src="../../assets/images/public.png" style="width:2.27rem;height:2.27rem" />
      <p class="textSize-32">关注汽车健康检测公众号</p>
    </el-col>
    <el-col :span="6">
      <img src="../../assets/images/appDownload.png" style="width:2.27rem;height:2.27rem" />
      <p class="textSize-32">下载汽修竞价APP</p>
    </el-col>
  </el-row>
</div>
</template>
<script>
import ModularTitle from './modularTitle'
import Icon from '@/assets/images/viewReport.png'
// import Layouts from '@/components/tablet/layouts'
export default {
  name: 'Guide',
  components: {
    ModularTitle
  },
  data () {
    return {
      msg: '检测机构',
      icon: Icon,
      titleText: '通过以下方式在手机上查看检测报告'
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
.cus-stage { text-indent:.64rem; line-height:.50rem}
.cus-row-guide { margin-top:.74rem; text-align:center }
.cus-row-guide p {margin-top:.1rem}
</style>
