<!-- 响应式布局 -->
<template>
<el-row :gutter="10">
  <el-col v-for="(item,index) in resData" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :key="index" class="listObject">
    <label>{{item.label}}:</label> {{item.value}}
  </el-col>
</el-row>
</template>
<script>
export default {
  name: 'Organization',
  props: {
    resData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      msg: '检测机构'
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
