<template>
  <el-row type="flex" align="middle" >
    <el-col :span="3" >
      <div class="grid-content ep-bg-purple-dark" >
        <el-link type="primary" :underline=false href="http://localhost:8080/">
          <img src="@/assets/static/img/logo.gif" style="width:25px;" />魔盒首页
        </el-link>
        </div>
    </el-col>
    <el-col :span="3">
      <div class="grid-content ep-bg-purple-dark" >
        <div><router-link to="/music" style="color:#0dbc79;"><el-icon style="margin-right:2px"><Headset /></el-icon>音乐</router-link></div>
      </div>
    </el-col>
    <el-col :span="3">
        <div><router-link to="/weather" style="color:#0dbc79;"><el-icon><PartlyCloudy /></el-icon>天气</router-link></div>
    </el-col>
    <el-col :span="3" :push="9">
      <div class="grid-content ep-bg-purple-dark" v-if="!userCookie">
        <el-link type="primary" :underline=false href="http://localhost:8080/">
          <div><router-link to="/login" style="color:#0dbc79;">登录</router-link></div>
        </el-link>
      </div>
      <div class="grid-content ep-bg-purple-dark" v-if="userCookie" style="color: #337ecc">
          当前用户：{{this.$cookies.get("userName")}}&nbsp;
          <el-button @click="delUserCookie" style="color:#337ecc;" link >退出</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
  name:"TopTitle"
  ,data() {
    return {
      userCookie : this.$cookies.isKey("userName") 
    }
  },methods: {
    delUserCookie(){
      this.$cookies.remove("userName")
      this.setUserCookie();
      ElMessage.success("退出成功！")
    }
    ,setUserCookie(){
      this.userCookie = this.$cookies.isKey("userName")
    }
   ,temp(){
      console.log("temp");
   } 
  },
}
</script>

<style lang="scss">
a{
  text-decoration: none;
}
.el-row {
  margin-bottom: 20px;
  height: 100%;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  padding: 3px 0;
  height: 30px;
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
<style scoped>
.el-link {
  font-size: 1rem;
  margin-right: 8px;
  color:#0dbc79;
  color: #79bbff;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
</style>