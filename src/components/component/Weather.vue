<template>
  <div>
    <h1>
      {{ livename }}天气情况
    </h1>
    <!-- <span>更新时间:{{ liveinfos.reporttime }}</span
      ><br />
      <span
        >天气：{{ liveinfos.weather }} &nbsp; 温度：{{
          liveinfos.temperature
        }}</span
      ><br />
      <span>风向：{{ liveinfos.winddirection }}风</span> -->
    <div id="weathers">
      <ul>
        <li v-for="liveinfo in liveinfos" :key="liveinfo">
          <p>日期：{{liveinfo.date}}&nbsp; 周{{liveinfo.week}} </p>
           <p>天气： {{liveinfo.dayweather}}-->{{liveinfo.nightweather}}</p>
           <p>温度：最高{{liveinfo.daytemp}}° &nbsp; 最低{{liveinfo.nighttemp}}°</p>
           <p>风向：{{liveinfo.daywind}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      livename: "",
      liveinfos: []
    };
  },
  mounted() {
    // 页面加载完调用这个方法来获取
    this.getWeather("b7d5ea25b6db48b4dad14d6cb06e5c81");
  },
  methods: {
    getWeather(key) {  
    let api = "	https://restapi.amap.com/v3/ip?key="+key
    axios
    .get(api)
    .then((res) => {
      this.setWeather(key,res.data.adcode)
    })
    .catch((error) => {
    console.log(error);
    });
    },
    setWeather(key,city){
      // 获取城市的天气情况 如长沙市
    let api2 = "https://restapi.amap.com/v3/weather/weatherInfo?key="+key+"&city="+city+"&extensions=all"
    axios
      .get(api2)
      .then((res) => {
        var info = res.data.forecasts[0]
        this.livename = info.province+'省'+ info.city
        
        this.liveinfos = info.casts;
        console.log(this.liveinfos[0].date);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
};
</script>
<style>
#weathers>ul{
  margin-top: 3.5rem;
}
#weathers>ul>li{
  width: 13rem;
  height: 10rem;
  list-style: none;
  border-radius: 1rem;
  background-color: #79bbff;
  color: #FFF;
  float: left;
  margin-right: 2rem;
}
</style>