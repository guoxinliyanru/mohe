<template>
  <div id="home">
    <ul>
      <li v-for="resource in resources" :key="resource" style="list-style:none;">
        <div class="resource" >
          <div class="resource-left">
            <img :src="resource.imgurl">
          </div>
          <div  class="resource-right">
            <span class="resource-title">{{resource.title}}</span>
            <span>{{resource.info}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div id="bulletin">
      <Bulletin></Bulletin>
  </div>
</template>

<script>
import Bulletin from "@/components/Bulletin"
  export default {
    name:"app"
    ,components:{
      Bulletin
    }
    ,data() {
      return {
        resources:[
          {
            imgurl: require('@/assets/static/img/resource.jpg')
            ,title:"标题"
            ,info:"主体内容"
          }
          ,{
            imgurl:require('@/assets/static/img/resource2.jpg')
            ,title:"标题2"
            ,info:"主体内容2"
          }
          ,{
            imgurl:require('@/assets/static/img/resource3.jpg')
            ,title:"标题3"
            ,info:"主体内容3"
          }
          ,{
            imgurl:require('@/assets/static/img/resource3.jpg')
            ,title:"标题3"
            ,info:"主体内容3"
          }
          ,{
            imgurl:require('@/assets/static/img/resource3.jpg')
            ,title:"标题3"
            ,info:"主体内容3"
          }
          ,{
            imgurl:require('@/assets/static/img/resource3.jpg')
            ,title:"标题3"
            ,info:"主体内容3"
          }
          ,{
            imgurl:require('@/assets/static/img/resource3.jpg')
            ,title:"标题3"
            ,info:"主体内容3"
          }
          
        ]
      }
    },
  }
</script>

<style>
  body{
    font-size: 1rem;
  }
  #bulletin{
    width: 17.5rem;
    height: 25rem;
    border: 1.5px solid #dada;
    border-radius: 8px;
    position: absolute;
    top: 6rem;
    right: 13rem;
  }
  #home{
    height: 23rem;
  }
  #home>ul>li{
    margin-bottom: 2rem;
  }
  #home>ul>li>.resource{
    width: 35rem;
    height: 10rem;
    border: 1px solid #dadada;
    border-radius: 8px;
    margin-right: 2.5rem;
    overflow :hidden;
    transition: box-shadow 0.7s;
  }
  #home>ul>li>.resource:hover{
    box-shadow: 0 0 10px #dadada;
  }
  #home>ul>li>.resource>.resource-left{
    width: 35%;
    height: 100%;
    float: left;
    margin-right: 1rem;
  }
  #home>ul>li>.resource>.resource-left>img{
    width: 100%;
    height: 100%;
  }
  #home>ul>li>.resource>.resource-right{
    width: 60%;
    height: 90%;
    padding: 5% 0;
    float: right;
    text-align: left;

  }
  #home>ul>li>.resource>.resource-right>.resource-title{
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 2rem;
    display: block;
  }
</style>