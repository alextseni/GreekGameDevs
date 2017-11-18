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
} from 'static/icons'

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
  indiedb: <IndieDB className='socialIcon' />,
})[media]

const getViewIcon = (view) => ({
  'list': <ViewModule />,
  'grid':  <ViewTable width='24px' />,
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
})[status]

export {
  getViewIcon,
  transformName,
  getMediaIcon,
  getColorCode,
}
