import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import admission from '@/components/admission'
import content from '@/components/content'
import admissionResult from '@/components/admissionResult'
import Login from '@/components/Admin/login'
import admin from '@/components/Admin/index'
import adm from '@/components/Admin/admission'
import faculty from '@/components/Admin/faculty'
import dept from '@/components/Admin/department'
import students from '@/components/Admin/students'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          name: 'content',
          props: true,
          component: content
        },
        {
          path: 'admission',
          name: 'admission',
          props: true,
          component: admission
        },
        {
          path: 'admission/:studentUtme',
          name: 'admissionResult',
          props: true,
          component: admissionResult
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: '',
          name: 'faculty',
          props: true,
          component: faculty
        },
        {
          path: 'dept',
          name: 'dept',
          props: true,
          component: dept
        },
        {
          path: 'students',
          name: 'students',
          props: true,
          component: students
        },
        {
          path: 'adm',
          name: 'adm',
          props: true,
          component: adm
        }
      ]
    }
  ]
})
