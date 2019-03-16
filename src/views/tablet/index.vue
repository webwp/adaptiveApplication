<template>
  <div>
    <header>
      <el-row :gutter="20">
        <el-col :span="7" align="left"><img src="../../assets/images/logo.png" class="imagesStyle"/></el-col>
        <el-col :span="10"><h1 class="text-size-67 text-color-back textAlignC">汽车健康检测报告</h1></el-col>
        <el-col :span="7" align="right"><div class="text-size-32 text-color-gray tel">服务热线： 400-181-5180</div></el-col>
      </el-row>
    </header>
    <div class="clear"></div>
    <Banner />
    <!-- 检测机构 -->
    <Organization :device="resData.device"/>
    <!-- 车辆信息 -->
    <CarInfo :carInfo="resData.vehicle"/>
    <!-- 检测结果 -->
    <TestingRes :report="resData.report"/>
    <!-- 检测详情 -->
    <TestingDetail :report="resData.report"/>
    <!-- 免责声明 -->
    <Disclaimer />
    <!-- 通过以下方式在手机上查看检测报告 -->
    <Guide />
    <!-- 页脚 -->
    <Footer />
  </div>
</template>
<script>
import Banner from '@/components/tablet/Banner'
import Organization from '@/components/tablet/organization'
import CarInfo from '@/components/tablet/carInfo'
import TestingRes from '@/components/tablet/testingRes'
import TestingDetail from '@/components/tablet/testingDetail'
import Disclaimer from '@/components/tablet/disclaimer'
import Guide from '@/components/tablet/guide'
import Footer from '@/components/tablet/footer'
export default {
  name: 'TabletIndex',
  components: {
    Banner,
    Organization,
    CarInfo,
    TestingRes,
    TestingDetail,
    Disclaimer,
    Guide,
    Footer
  },
  data () {
    return {
      resData: {
        device: {},
        vehicle: {},
        report: {}
      }
    }
  },
  created () {
    console.log('index', this.$route.query)
    let params = { ...this.$route.query, type: this.$route.query.view }
    this.$net.post('SHARE_REPORT_GET', params).then(res => {
      console.log('POST请求结果返回:', res)
      this.resData = res
      // console.log(JSON.stringify(res.report.systems))
    })
    // this.$net.post('SHARE_REPORT_GET', { sn: '01190218282211747526361097', type: 'ds', auth: '{}' }).then(res => {
    //   console.log('POST请求结果返回:', res)
    //   this.resData = res
    //   // console.log(JSON.stringify(res.report.systems))
    // })
  }
}
</script>
<style scoped>
h1,h2,h3,h4,h5,h6 { margin:0}
.text-size-67 {font-size:.67rem; }
.text-size-32 {font-size:.32rem;}
.text-color-gray { color:#999}
.text-color-back { color:#333}
body {background:#f5f5f5}
header { height:1.8rem; background:#fff; line-height:1.8rem; width:100%}
.imagesStyle { margin-top:.50rem; width:3.33rem; margin-left:.42rem}
.tel {margin-right:.42rem}
.el-row { margin-left: 0px!important;margin-right: 0px!important;}
</style>
