<template>
<div class="common-layout">
    <el-container>
      <el-header style="background-color:FFF;padding:0;box-shadow: 0 2px 15px #999;z-index: 999;">
        <TopTitle id="TopTitle"></TopTitle>
      </el-header>
      <el-main style="padding:50px 13%;">
        <router-view></router-view>
      </el-main>
      <el-footer height="auto">
        <Bottom></Bottom>
      </el-footer>
    </el-container>
  </div>
</template>

<script> 
import TopTitle from "@/components/TopTitle"
import Bottom from "@/components/Bottom"

export default {
  name: 'App'
  ,components:{
    TopTitle
    ,Bottom
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
  font-size: 1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
