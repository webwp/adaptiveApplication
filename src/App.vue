<template>
  <div id="app">
    <div ref="startpage" v-if="startPage" class="startpage">
      <img src="./assets/images/logo-new.png" class="logoStyle" />
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: mapState({
    startPage: (state) => {
      console.log('xxxssstore', state)
      return state.app.startPage
    }
  })
}
</script>

<style>
html { font-size: calc(100vw / 100px)}
body {background:#f5f5f5; margin:0;padding:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background:#f5f5f5
}
.clear{ clear:both }
.modular { margin-top:.3rem; background:#fff; padding: .40rem .42rem}
.textColor-9 {color:#999}
.textColor-3 {color:#333}
.textSize-32 {font-size:.32rem}
.textSize-67 {font-size:.67rem}
.textSize-24 {font-size:.24rem}
.textSize-28 {font-size:.28rem}
.textSize-40 {font-size:.40rem}
.textSize-38 {font-size:.38rem}
.textSize-33 {font-size:.33rem}
.textAlignC {text-align:center}
.cus-module .el-collapse-item__header, .cus-module  .el-collapse-item__wrap {
  border:0 !important
}
.cus-module {margin-top:.4rem; margin-bottom: .5rem}
.cus-module .el-collapse-item__header {
  font-size: .38rem;
  font-weight: bold;
  color:#333
}
.cus-table-header .cell, .cus-module .el-table .cell {line-height:.32rem!important}
.cus-module .el-collapse {border:none}
.set-loading-size * { font-size: .32rem !important }
.set-icon-size { font-size: .32rem; min-width: 1rem}
.set-icon-size .el-message__icon { font-size: .32rem; }
.set-icon-size p { font-size: .32rem }
.startpage { height:100vh;width:100vw; position:fixed; background: #fff; z-index:20; text-align:center; line-height:100vh; }
.logoStyle { width:1.7rem; height:1.7rem}
</style>
