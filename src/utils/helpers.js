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
  Unity,
  Mail,
  Question,
} from 'static/icons'
import './helpers.scss'

const getTableHeader = (category) => ({
  'companies': ['Company/Team', 'Products', 'Media', 'Status'],
  'games': ['Game', 'Team(s)', 'Media', 'Platforms', 'Status'],
  'assets': ['Asset/Tool', 'Team(s)', 'Source', 'Status'],
}[category])

const getMenuItems = (media) => [
  {
    icon: <News className='menuIcon' />,
    iconSmall: <News className='menuIconSmall' />,
    header: 'Dashboard',
    path: '/',
  },
  {
    icon: <Database className='menuIcon' />,
    iconSmall: <Database className='menuIconSmall' />,
    header: 'Database',
    path: '',
  },
  {
    icon: <Mail className='menuIcon' />,
    iconSmall: <Mail className='menuIconSmall' />,
    header: 'Contact',
    path: '/communication',
  },
  {
    icon: <Question className='menuIcon' />,
    iconSmall: <Question className='menuIconSmall' />,
    path: '/info',
    header: 'F.A.Q',
  },
]

const getDatabaseItems = (media) => [
  {
    icon: <VideoGames className='dbIcon' />,
    iconSmall: <VideoGames className='dbIconSmall' />,
    header: 'Video Games',
    path: '/database/videogames',
  },
  {
    icon: <Tools className='dbIcon' />,
    iconSmall: <Tools className='dbIconSmall' />,
    header: 'Tools & Assets',
    path: '/database/tools',
  },
]

const getFilters = (filter) => ({
  companies: [
    {
      filterName: 'Status',
      filterValue: 'status',
      filterOptions: [
        { name: 'Active', value: 'Active' },
        { name: 'Inactive', value: 'Inactive' },
      ],
    }
  ],
  assets: [
    {
      filterName: 'Status',
      filterValue: 'status',
      filterOptions: [
        { name: 'Under Development', value: 'Under Development' },
        { name: 'Released', value: 'Released' },
        { name: 'Beta', value: 'Beta' },
        { name: 'Unavailable', value: 'Unavailable' },
      ],
    },
    {
      filterName: 'Cost',
      filterValue: 'price',
      filterOptions: [
        { name: 'Free', value: 'free' },
        { name: 'Buy once', value: 'buy' },
        { name: 'Subscription', value: 'subscription' },
      ],
    },
    // {
    //   filterName: 'Category',
    //   filterValue: 'category',
    //   filterOptions: [
    //     { name: 'Asset', value: 'asset' },
    //     { name: 'Tool', value: 'tool' },
    //   ],
    // },
  ],
  games: [
    {
      filterName: 'Platforms',
      filterValue: 'platforms',
      filterOptions: [
        { name: 'Steam', value: 'steam' },
        { name: 'PC', value: 'pc' },
        { name: 'Online', value: 'online' },
        { name: 'Android', value: 'playstore' },
        { name: 'iOS', value: 'appStore' },
        { name: 'Windows', value: 'windowstore' },
      ],
    },
    {
      filterName: 'Genres',
      filterValue: 'genre',
      filterOptions: [
        { name: 'Puzzle', value: 'puzzle' },
        { name: 'Adventure', value: 'adventure' },
        { name: 'Idle', value: 'idle' },
        { name: 'RPG', value: 'rpg' },
        { name: 'Horror', value: 'horror' },
        { name: 'Platform', value: 'platform' },
        { name: 'Action', value: 'action' },
        { name: 'Simulation', value: 'simulation' },
        { name: 'Strategy', value: 'strategy' },
        { name: 'Runner', value: 'runner' },
        { name: 'Sports', value: 'sports' },
        { name: 'Educational', value: 'educational' },
      ],
    },
    {
      filterName: 'Style',
      filterValue: 'style',
      filterOptions: [
        { name: '2D', value: '2d' },
        { name: '3D', value: '3d' },
        { name: 'VR', value: 'vr' },
        { name: 'AR', value: 'ar' },
      ],
    },
    {
      filterName: 'Modes',
      filterValue: 'mode',
      filterOptions: [
        { name: 'Single Player', value: 'singlePlayer' },
        { name: 'Local Multiplayer', value: 'localMultiplayer' },
        { name: 'Online Multiplayer', value: 'onlineMultiplayer' },
      ],
    },
    {
      filterName: 'Status',
      filterValue: 'status',
      filterOptions: [
        { name: 'Under Development', value: 'Under Development' },
        { name: 'Released', value: 'Released' },
        { name: 'Beta', value: 'Beta' },
        { name: 'Unavailable', value: 'Unavailable' },
      ],
    },
  ],

})[filter]

const getMediaIcon = (media) => ({
  website: <Website className='socialIcon' />,
  websiteD: <Website className='socialIcon' />,
  websiteP: <Website className='socialIcon' />,
  facebook: <Facebook className='socialIcon' />,
  twitter: <Twitter className='socialIcon' />,
  youtube: <Youtube className='socialIcon' />,
  steam: <Steam className='socialIcon' />,
  pc: <PC className='socialIcon' />,
  unity: <Unity className='socialIcon' />,
  playstore: <PlayStore className='socialIcon' />,
  appStore: <AppStore className='socialIcon' />,
  linkedin: <LinkedIn className='socialIcon' />,
  windowstore: <WindowsStore className='socialIcon' />,
  demo: <Demo className='socialIcon' />,
  online: <Online className='socialIcon' />,
  sourcecode: <Source className='socialIcon' />,
  indiedb: <IndieDB className='socialIcon' />,
})[media]

const getViewIcon = (view) => ({
  'list': <ViewModule />,
  'grid':  window.matchMedia('(min-width: 770px)').matches ? <ViewTable width='24px' /> : <ViewList />,
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
  getFilters,
  getTableHeader,
  getDatabaseItems,
  getMenuItems,
  transformName,
  getMediaIcon,
  getColorCode,
}
