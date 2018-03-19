import React from 'react';

import {
  ViewModule,
  ViewList,
  Assignment,
  VideogameAsset,
  Settings,
  School,
  Work,
  People,
  Web,
  Mail,
  Help,
  Storage,
  Dashboard,
} from 'material-ui-icons';
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
  Unity,
  ThreeD,
} from 'static/icons';
import StarIcon from 'material-ui-icons/Star';

import { classes, styles } from './style';

const getFeedIcon = category =>
  ({
    feature: <StarIcon />,
    info: <Assignment />,
  }[category]);

const getTableHeader = category =>
  ({
    companies: ['Company/Team', 'Products', 'Media', 'Status'],
    games: ['Game', 'Team(s)', 'Media', 'Platforms', 'Status'],
    assets: ['Asset/Tool', 'Team(s)', 'Source', 'Status'],
  }[category]);

const getMenuItems = () => [
  {
    icon: <Dashboard className={classes.menuIcon} />,
    iconSmall: <Dashboard className={classes.menuIconSmall} />,
    header: 'Dashboard',
    path: '/',
  },
  {
    icon: <Storage className={classes.menuIcon} />,
    iconSmall: <Storage className={classes.menuIconSmall} />,
    header: 'Database',
    path: '',
  },
  {
    icon: <Mail className={classes.menuIcon} />,
    iconSmall: <Mail className={classes.menuIconSmall} />,
    header: 'Contact',
    path: '/communication',
  },
  {
    icon: <Help className={classes.menuIcon} />,
    iconSmall: <Help className={classes.menuIconSmall} />,
    path: '/info',
    header: 'F.A.Q',
  },
];

const getDatabaseItems = () => [
  {
    icon: <VideogameAsset className={classes.dbIcon} />,
    iconSmall: <VideogameAsset className={classes.dbIconSmall} />,
    header: 'Video Games',
    path: '/database/videogames',
  },
  {
    icon: <Settings className={classes.dbIcon} />,
    iconSmall: <Settings className={classes.dbIconSmall} />,
    header: 'Tools & Assets',
    path: '/database/tools',
  },
  {
    icon: <People className={classes.dbIcon} />,
    iconSmall: <People className={classes.dbIconSmall} />,
    header: 'Networks',
    path: '/database/networks',
  },
  // {
  //   icon: <Web className={classes.dbIcon} />,
  //   iconSmall: <Web className={classes.dbIconSmall} />,
  //   header: 'Media',
  //   path: '/database/media',
  // },
  // {
  //   icon: <School className={classes.dbIcon} />,
  //   iconSmall: <School className={classes.dbIconSmall} />,
  //   header: 'Education',
  //   path: '/database/education',
  // },
  // {
  //   icon: <Work className={classes.dbIcon} />,
  //   iconSmall: <Work className={classes.dbIconSmall} />,
  //   header: 'Jobs',
  //   path: '/database/jobs',
  // },
];

const getFilters = (filter, data) =>
  ({
    companies: [
      {
        filterName: 'Status',
        filterValue: 'status',
        filterOptions: [
          { label: 'Active', value: 'Active' },
          { label: 'Inactive', value: 'Inactive' },
        ],
      },
      {
        filterName: 'Year founded',
        filterValue: 'founded',
        filterOptions: data?.foundationYears?.map(y => ({ label: y, value: y })),
      },
      {
        multiselect: true,
        filterName: 'Location',
        filterValue: 'location',
        filterOptions: data?.locations?.map(y => ({ label: y, value: y })),
      },
    ],
    networks: [
      {
        multiselect: true,
        filterName: 'Location',
        filterValue: 'location',
        filterOptions: data?.locations?.map(y => ({ label: y, value: y })),
      },
      {
        filterName: 'Category',
        filterValue: 'type',
        filterOptions: [
          { label: 'Meetup', value: 'Meetup' },
          { label: 'Community', value: 'Community' },
          { label: 'Expo', value: 'Expo' },
          { label: 'Organization', value: 'Organization' },
        ],
      },
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
        filterName: 'Release year',
        filterValue: 'released',
        filterOptions: data?.releasesYears?.map(y => ({ label: y, value: y })),
      },
      {
        multiselect: true,
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
        multiselect: true,
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
        multiselect: true,
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
        multiselect: true,
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
  }[filter]);

const getMediaIcon = media =>
  ({
    website: <Website className={classes.socialIcon} />,
    websiteD: <Website className={classes.socialIcon} />,
    websiteP: <Website className={classes.socialIcon} />,
    facebook: <Facebook className={classes.socialIcon} />,
    twitter: <Twitter className={classes.socialIcon} />,
    youtube: <Youtube className={classes.socialIcon} />,
    steam: <Steam className={classes.socialIcon} />,
    pc: <PC className={classes.socialIcon} />,
    unity: <Unity className={classes.socialIcon} />,
    '3d': <ThreeD className={classes.socialIcon} />,
    playstore: <PlayStore className={classes.socialIcon} />,
    appStore: <AppStore className={classes.socialIcon} />,
    linkedin: <LinkedIn className={classes.socialIcon} />,
    windowstore: <WindowsStore className={classes.socialIcon} />,
    demo: <Demo className={classes.socialIcon} />,
    online: <Online className={classes.socialIcon} />,
    sourcecode: <Source className={classes.socialIcon} />,
    indiedb: <IndieDB className={classes.socialIcon} />,
  }[media]);

const getViewIcon = view =>
  ({
    list: <ViewModule />,
    grid: window.matchMedia('(min-width: 770px)').matches ? (
      <ViewTable width="24px" />
    ) : (
      <ViewList />
    ),
    table: <ViewList />,
  }[view]);

const transformName = name =>
  ({
    websiteD: 'website',
    websiteP: 'website',
    playstore: 'android',
    appStore: 'iOS',
    windowstore: 'windows',
  }[name]);

const getColorCode = status =>
  ({
    Active: '#3f51b5',
    Inactive: 'default',
    'Under Development': '#ff4081',
    Unavailable: 'rgba(0, 0, 0, 0.87)',
    Released: '#3f51b5',
    null: '#3f51b5',
    Beta: '#ff4081',
  }[status]);

export {
  getViewIcon,
  getFeedIcon,
  getFilters,
  getTableHeader,
  getDatabaseItems,
  getMenuItems,
  transformName,
  getMediaIcon,
  getColorCode,
};
