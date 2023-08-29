import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import libraryPage from '@/pages/libraryPage.vue'
import byGenre from '@/pages/byGenre.vue'
import fanfic from '@/pages/fanfic.vue'


/*function idByPath(route) {
  const idByPath = route.params.id;
  return{
    idByPath
  }
}*/
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/library',
    component: libraryPage
  },
  {
    path: '/fanfic/:pathName',
    name: 'fanfic',
    component: fanfic,
    props: {
      default: true,
      selectedFic: Array,
      sortedFics: Array,
      selectedFanfic: Object,
     /* idByPath: Function,*/
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
