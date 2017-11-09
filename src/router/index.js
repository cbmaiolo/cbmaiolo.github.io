import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IsotopeGallery from '@/components/IsotopeGallery'
import Resume from '@/components/Resume'
import ProjectSamplerGrid from '@/components/ProjectSamplerGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ProjectSamplerGrid
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: IsotopeGallery
    },
    {
      path: '/aboutme',
      name: 'About Me',
      component: Resume
    },
    {
      path: '/blog',
      name: 'Sampler',
      component: HelloWorld
    }
  ]
})
