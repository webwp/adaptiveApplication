<template>
<div class="modular">
  <ModularTitle v-bind:icon='icon' v-bind:titleText="titleText"/>
  <!-- <Layouts :resData="resData" /> -->
  <p class="cus-stage textSize-32 textColor-3">
    本检测报告仅为车主或维修技师提供参考，本报告中的数据均为静态数据，又此产品的任何事故和故障均不由金奔腾科技有限公司承担责任。
  </p>
</div>
</template>
<script>
import ModularTitle from './modularTitle'
import Icon from '@/assets/images/disclaimer.png'
// import Layouts from '@/components/tablet/layouts'
export default {
  name: 'Disclaimer',
  components: {
    ModularTitle
  },
  data () {
    return {
      msg: '检测机构',
      icon: Icon,
      titleText: '免责声明'
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
</style>
