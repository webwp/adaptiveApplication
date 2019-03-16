<template>
<div>
  <el-carousel :interval="5000" arrow="always" :height="imgHeight">
    <el-carousel-item v-for="item in img" :key="item">
      <img :src="item" class="bannerImg">
    </el-carousel-item>
  </el-carousel>
 </div>
</template>
<script>
import img from '../../assets/images/1208.png'
export default {
  name: 'Banner',
  data () {
    return {
      img: [img],
      imgHeight: '8.28rem'
    }
  },
  methods: {
    sou () {
      this.imgHeight = '4.2rem'
    }
  }
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 8.28rem;
  margin: 0;
}
.el-carousel .el-carousel__container {
  height: 8.28rem !important
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.bannerImg {height: 8.28rem; width:100%}
</style>
