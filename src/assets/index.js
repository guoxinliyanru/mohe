import {createRouter,createWebHashHistory} from 'vue-router'
import Login from  "@/components/user/Login"
import Home from  "@/components/Home"
import Music from  "@/components/component/Music"
import Weather from  "@/components/component/Weather"

const routes = [
  {
    path: '/'
    ,component: Home
  }
  ,{
    path: '/login'
    ,component: Login
  }
  ,{
    path: '/music'
    ,component: Music
  }
  ,{
    path: '/weather'
    ,component: Weather
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;