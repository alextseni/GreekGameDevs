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
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
      ],
    }
  ],
  assets: [
    {
      filterName: 'Status',
      filterValue: 'status',
      filterOptions: [
        { label: 'Under Development', value: 'Under Development' },
        { label: 'Released', value: 'Released' },
        { label: 'Beta', value: 'Beta' },
        { label: 'Unavailable', value: 'Unavailable' },
      ],
    },
    {
      filterName: 'Cost',
      filterValue: 'price',
      filterOptions: [
        { label: 'Free', value: 'free' },
        { label: 'Buy once', value: 'buy' },
        { label: 'Subscription', value: 'subscription' },
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
        { label: 'Steam', value: 'steam' },
        { label: 'PC', value: 'pc' },
        { label: 'Online', value: 'online' },
        { label: 'Android', value: 'playstore' },
        { label: 'iOS', value: 'appStore' },
        { label: 'Windows', value: 'windowstore' },
      ],
    },
    {
      filterName: 'Genres',
      filterValue: 'genre',
      filterOptions: [
        { label: 'Puzzle', value: 'puzzle' },
        { label: 'Adventure', value: 'adventure' },
        { label: 'Idle', value: 'idle' },
        { label: 'RPG', value: 'rpg' },
        { label: 'Horror', value: 'horror' },
        { label: 'Platform', value: 'platform' },
        { label: 'Action', value: 'action' },
        { label: 'Simulation', value: 'simulation' },
        { label: 'Strategy', value: 'strategy' },
        { label: 'Runner', value: 'runner' },
        { label: 'Sports', value: 'sports' },
        { label: 'Educational', value: 'educational' },
      ],
    },
    {
      filterName: 'Style',
      filterValue: 'style',
      filterOptions: [
        { label: '2D', value: '2d' },
        { label: '3D', value: '3d' },
        { label: 'VR', value: 'vr' },
        { label: 'AR', value: 'ar' },
      ],
    },
    {
      filterName: 'Modes',
      filterValue: 'mode',
      filterOptions: [
        { label: 'Single Player', value: 'singlePlayer' },
        { label: 'Local Multiplayer', value: 'localMultiplayer' },
        { label: 'Online Multiplayer', value: 'onlineMultiplayer' },
      ],
    },
    {
      filterName: 'Status',
      filterValue: 'status',
      filterOptions: [
        { label: 'Under Development', value: 'Under Development' },
        { label: 'Released', value: 'Released' },
        { label: 'Beta', value: 'Beta' },
        { label: 'Unavailable', value: 'Unavailable' },
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
