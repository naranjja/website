import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import BlogPost from '@/components/BlogPost'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: About
    },
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
      path: '/blog/:slug',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
