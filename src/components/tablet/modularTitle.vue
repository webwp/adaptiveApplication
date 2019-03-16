<template>
  <h1 class="title"><img :src="icon" />{{titleText}}</h1>
</template>
<script>
export default {
  name: 'ModularTitle',
  props: {
    titleText: {
      type: String,
      default: 'hello world'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.title {font-size:.43rem; color:#333; margin:0}
.title img { vertical-align: text-bottom; margin-right:.2rem}
</style>
