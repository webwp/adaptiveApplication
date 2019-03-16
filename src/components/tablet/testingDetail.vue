<template>
<div class="modular">
  <ModularTitle v-bind:icon='icon' v-bind:titleText="titleText"/>
  <!-- <Layouts :resData="resData" /> -->
  <div>
    <div class="textAlignC">
      <el-button class="cus-btn-attribute" @click="isShow = !isShow">专业模式</el-button>
      <p class="textColor-9 textSize-28">查看系统故障及解析</p>
    </div>
    <div class="cus-alert cus-alert-warning textSize-40">
      <img src="../../assets/images/fault.png" />
      异常系统（{{report.faultCount}}）
    </div>
    <!-- 发动机系统 -->
    <div class="cus-module">

      <el-collapse v-for="(item, index) in report.systems" v-model="activeNames" v-if="item.faultcodes.length > 0" :key="index" @change="handleChange">
        <el-collapse-item ref="collapse" :title="item.systemName" :name="index + 'abnormal'">
          <h2 class="textSize-33"><span class="cus-tip"></span>故障码 ({{item.faultcodeCount}})</h2>
          <!-- 表格 -->
          <el-table
            :data="item.cusFaultcodes"
            :header-row-style="tableStyle"
            :header-cell-style="tableStyle"
            :cell-style="tableRowStyle"
            border
            header-row-class-name="cus-table-header"
            row-class-name="cus-table-row"
            style="width: 100%">
            <el-table-column
              v-for="(elItem, elIndex) in item.labelCode"
              :label="elItem.label + '(' + elItem.count + ')'"
              :key="elIndex">
              <template slot-scope="scope">
                <div>{{scope.row[elItem.field].displayCode}}：{{scope.row[elItem.field].explainCn}}</div>
              </template>
            </el-table-column>
          </el-table>
          <!-- 版本信息 -->
          <div v-show="isShow">
            <h2 class="textSize-33"><span class="cus-tip"></span>版本信息 ({{item.datastreamCount}})</h2>
            <!-- 表格 -->
            <el-table
              :data="item.ecuinfos"
              :header-row-style="tableStyle"
              :header-cell-style="tableStyle"
              :cell-style="tableRowStyle"
              border
              header-row-class-name="cus-table-header"
              row-class-name="cus-table-row"
              style="width: 100%">
              <el-table-column
                prop="captionCn"
                label="中文名称">
              </el-table-column>
              <el-table-column
                prop="info"
                label="版本信息值">
              </el-table-column>
            </el-table>
            <!-- 数据流 -->
            <h2 class="textSize-33"><span class="cus-tip"></span>数据流 ({{item.datastreamCount}})</h2>
            <!-- 表格 -->
            <el-table
              :data="item.datastreams"
              :header-row-style="tableStyle"
              :header-cell-style="tableStyle"
              :cell-style="tableRowStyle"
              border
              header-row-class-name="cus-table-header"
              row-class-name="cus-table-row"
              style="width: 100%">
              <el-table-column
                prop="captionCn"
                label="项目">
              </el-table-column>
              <el-table-column
                label="值">
                <template slot-scope="scope">
                  <div>{{scope.row.currentValue}}</div>
                </template>
              </el-table-column>
              <el-table-column
                label="参考范围">
                <template slot-scope="scope">
                  <div>{{scope.row.minValue}} ~ {{scope.row.maxValue}}</div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </el-collapse>

      <!-- <h1 class="textSize-38">发动机系统</h1> -->

    </div>
    <div class="cus-alert cus-alert-success textSize-40">
      <img src="../../assets/images/normal.png" />
      正常系统（{{report.normalCount}}）
    </div>
    <!-- 发动机系统 -->
    <div class="cus-module">

      <el-collapse v-for="(item, index) in report.systems" v-model="activeNames" v-if="item.faultcodes.length === 0" :key="index" @change="handleChange">
        <el-collapse-item ref="collapse" :title="item.systemName" :name="index + 'abnormal'">
          <h2 class="textSize-33"><span class="cus-tip"></span>故障码 ({{item.faultcodeCount}})</h2>
          <!-- 表格 -->
          <el-table
            :data="item.cusFaultcodes"
            :header-row-style="tableStyle"
            :header-cell-style="tableStyle"
            :cell-style="tableRowStyle"
            border
            header-row-class-name="cus-table-header"
            row-class-name="cus-table-row"
            style="width: 100%">
            <el-table-column
              v-for="(elItem, elIndex) in item.labelCode"
              :label="elItem.label + '(' + elItem.count + ')'"
              :key="elIndex">
              <template slot-scope="scope">
                <div>{{scope.row[elItem.field].displayCode}}：{{scope.row[elItem.field].explainCn}}</div>
              </template>
            </el-table-column>
          </el-table>
          <!-- 版本信息 -->
          <div v-show="isShow">
            <h2 class="textSize-33"><span class="cus-tip"></span>版本信息 ({{item.datastreamCount}})</h2>
            <!-- 表格 -->
            <el-table
              :data="item.ecuinfos"
              :header-row-style="tableStyle"
              :header-cell-style="tableStyle"
              :cell-style="tableRowStyle"
              border
              header-row-class-name="cus-table-header"
              row-class-name="cus-table-row"
              style="width: 100%">
              <el-table-column
                prop="captionCn"
                label="中文名称">
              </el-table-column>
              <el-table-column
                prop="info"
                label="版本信息值">
              </el-table-column>
            </el-table>
            <!-- 数据流 -->
            <h2 class="textSize-33"><span class="cus-tip"></span>数据流 ({{item.datastreamCount}})</h2>
            <!-- 表格 -->
            <el-table
              :data="item.datastreams"
              :header-row-style="tableStyle"
              :header-cell-style="tableStyle"
              :cell-style="tableRowStyle"
              border
              header-row-class-name="cus-table-header"
              row-class-name="cus-table-row"
              style="width: 100%">
              <el-table-column
                prop="captionCn"
                label="项目">
              </el-table-column>
              <el-table-column
                label="值">
                <template slot-scope="scope">
                  <div>{{scope.row.currentValue}}</div>
                </template>
              </el-table-column>
              <el-table-column
                label="参考范围">
                <template slot-scope="scope">
                  <div>{{scope.row.minValue}} ~ {{scope.row.maxValue}}</div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </el-collapse>

    </div>
  </div>
</div>
</template>
<script>
import ModularTitle from './modularTitle'
import Icon from '@/assets/images/testingDetail.png'
import Layouts from '@/components/tablet/layouts'
export default {
  name: 'TestingDetail',
  components: {
    ModularTitle,
    Layouts
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
        let t = this
        // 错误码数据格式转换
        cur.systems.forEach((item, index) => {
          let faultcodesArr = []
          item.faultcodes.forEach((val, i) => {
            faultcodesArr.push({ label: val.catagory, count: val.count, field: 'field' + i, arr: val.faultcodes })
          })
          let newFaultcodes = {}
          faultcodesArr.forEach((val, i) => {
            val.arr.forEach((m, n) => {
              newFaultcodes[val.field] = m
            })
          })
          item.labelCode = faultcodesArr
          item.cusFaultcodes = []
          item.cusFaultcodes.push(newFaultcodes)
        })
        this.report = cur
        setTimeout(function () {
          let collapse = t.$refs.collapse
          t.activeNames = []
          collapse.forEach((item, index) => {
            t.activeNames.push(item.name)
          })
        }, 500)
      },
      deep: true
    }
  },
  data () {
    return {
      isShow: false,
      msg: '检测详情',
      icon: Icon,
      titleText: '检测详情',
      fuck: [],
      xyz: [
        {
          cur: {},
          his: {},
          forecer: {}
        }
      ],
      resData: [
        {
          label: '报告编号',
          value: '01150623260352779963547893'
        },
        {
          label: '检测系统',
          value: '19'
        },
        {
          label: '检测时间',
          value: '2018-09-29 15:39:42'
        },
        {
          label: '异常系统',
          value: '17'
        },
        {
          label: '检测结论',
          value: '车况良好（存在故障）'
        },
        {
          label: '正常系统',
          value: '2'
        }
      ],
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      tableStyle: {
        backgroundColor: '#f7f7f7',
        color: '#333',
        height: '.9rem',
        lineHeight: '.9rem',
        fontSize: '.32rem',
        textAlign: 'center'
      },
      tableRowStyle: {
        color: '#333',
        height: '.9rem',
        lineHeight: '.9rem',
        fontSize: '.32rem',
        textAlign: 'center'
      },
      activeNames: ['1']
    }
  },
  mounted () {
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    re () {
      console.log('-----------------------')
    }
  }
}
</script>
<style scoped>
.listObject {font-size: .32rem; line-height:.64rem; color:#333}
.listObject label { color:#999; margin-right:.1rem}
.el-row {margin-top:.4rem}
.cus-btn-attribute {height:.8rem;width:4.4rem; background:#ec6c00; font-size:.34rem;color:#fff;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
-o-border-radius: 10px;
-moz-border-radius:10px 10px 10px 10px;
-webkit-border:10px;
}
.cus-alert {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -moz-border-radius:5px 5px 5px 5px;
  -webkit-border:5px;
  height:1.1rem;
  line-height:1.1rem;
  text-align:center;
}
.cus-alert-warning {
  background:#fff7ee;
  color:#ff0000;
}
.cus-alert-success {
  background:#f2fff2;
  color:#07BF51;
}
.cus-alert img {
  vertical-align: text-bottom;
}
.cus-table-header { background:#f7f7f7!important; color:#333!important; height:.9rem!important; line-height:.9rem!important;font-size:.32rem!important}
.el-table {
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  -o-border-radius: 8px;
  -moz-border-radius:8px 8px 8px 8px;
  -webkit-border:8px;
  margin-bottom: .5rem
}
.cus-tip {
  width: .06rem;
  height:.33rem;
  margin-right: .18rem;
  background:#ec6c00;
  display: inline-block;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -moz-border-radius:5px 5px 5px 5px;
  -webkit-border:5px;
  vertical-align:text-bottom;
  margin-bottom: .06rem;
}
</style>
