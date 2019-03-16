<template>
<div class="modular">
  <ModularTitle v-bind:icon='icon' v-bind:titleText="titleText"/>
  <!-- <Layouts :resData="resData" /> -->
  <el-row :gutter="10">
    <el-col v-for="(item,index) in resData" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :key="index" class="listObject">
      <label>{{item.label}}:</label> {{device[item.value]}}
    </el-col>
  </el-row>
</div>
</template>
<script>
import ModularTitle from './modularTitle'
import Icon from '@/assets/images/testingOrg.png'
// import Layouts from '@/components/tablet/layouts'
export default {
  name: 'Organization',
  components: {
    ModularTitle
    // Layouts
  },
  props: {
    device: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    device: {
      handler (cur, old) {
        this.device = cur
      },
      deep: true
    }
  },
  data () {
    return {
      msg: '检测机构',
      icon: Icon,
      titleText: '检测机构',
      resData: [
        {
          label: '检测名称',
          value: 'orgName'
        },
        {
          label: '检测设备',
          value: 'name'
        },
        {
          label: '联系电话',
          value: 'orgPhone'
        },
        {
          label: '检测地址',
          value: 'orgAddr'
        },
        {
          label: '机构地址',
          value: 'diagnoseAddr'
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
