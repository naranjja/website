import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
