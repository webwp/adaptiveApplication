<template>
<div class="modular">
  <!-- <ModularTitle v-bind:icon='icon' v-bind:titleText="titleText"/> -->
  <!-- <Layouts :resData="resData" /> -->
  <el-row :gutter="10" class="cus-row-guide">
    <el-col :span="4" style="text-align:center">
      <img src="../../assets/images/dizhi.png" style="width:1.6rem; height:1.5rem" />
    </el-col>
    <el-col :span="8">
      <ul class="ulList">
        <li>电话：010-52220888</li>
        <li>传真：010-52220888</li>
        <li>免费咨询电话：400-181-5180(我要帮您)</li>
      </ul>
    </el-col>
    <el-col :span="12">
      <ul class="ulList">
        <li>
          <label class="labels">网址：</label>
          <div class="ul-contents"> &nbsp; www.jinbenteng.com</div>
        </li>
        <li>
          <label class="labels">地址：</label>
          <div class="ul-contents">
            北京市丰台区南四环西路188号总部基地11区32号楼（100070）<br />
            广西男你是高新区科创路2号金奔腾大夏（53007）
          </div>
        </li>
      </ul>
    </el-col>
  </el-row>
</div>
</template>
<script>
// import ModularTitle from './modularTitle'
// import Icon from '@/assets/images/viewReport.png'
// import Layouts from '@/components/tablet/layouts'
export default {
  name: 'Footer',
  data () {
    return {
      msg: '检测机构',
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
.cus-row-guide { margin-top:.1rem; }
.cus-row-guide p {margin-top:.1rem}
.ulList {font-size:.32rem; line-height:.42rem;}
.ulList .labels {
  width:1rem;
  float:left
}
ul,li {list-style: none; padding:0;margin:0}
.ul-contents { margin-left:1rem}
</style>
