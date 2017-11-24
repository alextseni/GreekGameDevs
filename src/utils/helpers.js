import React, { Component } from 'react'

import {
  ViewModule,
  ViewList,
} from 'material-ui-icons'
import {
  Facebook,
  Twitter,
  Youtube,
  Website,
  Steam,
  PlayStore,
  AppStore,
  LinkedIn,
  WindowsStore,
  Demo,
  Online,
  PC,
  IndieDB,
  ViewTable,
  Source,
  Database,
  News,
  VideoGames,
  Tools,
  Mail,
  Question,
} from 'static/icons'
import './helpers.scss'

const getMenuItems = (media) => [
  // {
  //   icon: <News className='menuIcon' />,
  //   header: 'Dashboard',
  //   path: '/',
  // },
  {
    icon: <Database className='menuIcon' />,
    header: 'Database',
    path: '/videogames',
  },
  {
    icon: <Mail className='menuIcon' />,
    header: 'Contact',
    path: '/communication',
  },
  {
    icon: <Question className='menuIcon' />,
    path: '/info',
    header: 'F.A.Q',
  },
]

const getDatabaseItems = (media) => [
  {
    icon: <VideoGames className='dbIcon' />,
    header: 'Video Games',
    path: '/videogames',
  },
  // {
  //   icon: <Tools className='dbIcon' />,
  //   header: 'Tools & Assets',
  //   path: '/tools',
  // },
]


const getMediaIcon = (media) => ({
  website: <Website className='socialIcon' />,
  websiteD: <Website className='socialIcon' />,
  websiteP: <Website className='socialIcon' />,
  facebook: <Facebook className='socialIcon' />,
  twitter: <Twitter className='socialIcon' />,
  youtube: <Youtube className='socialIcon' />,
  steam: <Steam className='socialIcon' />,
  pc: <PC className='socialIcon' />,
  playstore: <PlayStore className='socialIcon' />,
  appStore: <AppStore className='socialIcon' />,
  linkedin: <LinkedIn className='socialIcon' />,
  windowstore: <WindowsStore className='socialIcon' />,
  demo: <Demo className='socialIcon' />,
  online: <Online className='socialIcon' />,
  source: <Source className='socialIcon' />,
  indiedb: <IndieDB className='socialIcon' />,
})[media]

const getViewIcon = (view) => ({
  'list': <ViewModule />,
  'grid':  window.matchMedia("(min-width: 770px)").matches ? <ViewTable width='24px' /> : <ViewList />,
  'table': <ViewList />,
}[view])

const transformName = (name) => ({
  'websiteD': 'website',
  'websiteP': 'website',
  'playstore': 'android',
  'appStore': 'iOS',
  'windowstore': 'windows',
}[name])

const getColorCode = (status) => ({
  'Active': 'primary',
  'Inactive': 'default',
  'Under Development': 'accent',
  'Unavailable': 'default',
  'Released': 'primary',
  'null': 'primary',
  'Beta': 'accent',
})[status]

export {
  getViewIcon,
  getDatabaseItems,
  getMenuItems,
  transformName,
  getMediaIcon,
  getColorCode,
}
