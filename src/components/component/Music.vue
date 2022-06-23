<template>
  <h1>网易云热搜榜随机音乐</h1>
  <div v-if="getdataOne()">
      获取失败！
  </div>
  <div>
      <img v-bind:src="data.picurl" style="width:200px;heigth:200px;  " />
        <div id="musicInfo"> 
          <p>歌名：{{data.name}}</p>
          <p>歌手：{{artistsname}}</p>
        </div>
        <audio :src="mp3url" controls="true" autoplay></audio>
        <el-button style="width: 100px;height: 40px;margin: 0 0 50px 20px;" type="primary" @click="getMusic">
            下一首
        </el-button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    name :"app"
    ,data() {
        return {
            url : "https://api.uomg.com/api/rand.music?sort=热歌榜&format=json"
            ,data: ""
            ,datacode : 0
            ,artistsname : ""
            ,mp3url: ""
        }
    }
    ,created () {
        this.getMusic()
    }
    ,methods: {
        getdataOne(){
           return this.datacode == 1 ? false : true;
        }
        ,getMusic(){
            axios.get(this.url).then((response) => {
            this.data =  response.data.data
            ,this.datacode = response.data.code
            ,this.artistsname = response.data.data.artistsname
            ,this.mp3url = response.data.data.url;
        })
        }
    },

}

</script>
<style>
#musicInfo>p{
    font-family:"STXinwei",华文新魏,"STXinwei",华文新魏;
	color: #20a1ff;
	font-size: 1.5rem;
}
</style>