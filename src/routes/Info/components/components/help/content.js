import React from 'react';
import { getMediaIcon } from 'utils/helpers';

const help = [
  {
    key: 1,
    symbol: getMediaIcon('website'),
    explanation: 'link to website',
  },
  {
    key: 2,
    symbol: getMediaIcon('online'),
    explanation: 'link to playing the game online',
  },
  {
    key: 3,
    symbol: getMediaIcon('steam'),
    explanation: 'link to steam',
  },
  {
    key: 4,
    symbol: getMediaIcon('demo'),
    explanation: 'link to available demo of the game',
  },
  {
    key: 5,
    symbol: getMediaIcon('indiedb'),
    explanation: 'link to IndieDB',
  },
  {
    key: 6,
    symbol: getMediaIcon('pc'),
    explanation:
      'link to the pc version of the game ' +
      '(there is no distinction between linux, mac or windows)',
  },
  {
    key: 7,
    symbol: getMediaIcon('sourcecode'),
    explanation: 'link to source code',
  },
  {
    key: 8,
    symbol: getMediaIcon('3d'),
    explanation: 'link to site with 3d assets',
  },
  {
    key: 9,
    symbol: 'website icon sometimes appears twice',
    explanation:
      "one is for the developer's website and the other for the publisher's",
  },
  {
    key: 10,
    symbol: <p style={{ color: 'red', margin: 0 }}>red colored text</p>,
    explanation: 'item is under development or in beta',
  },
  {
    key: 11,
    symbol: <p style={{ color: 'black', margin: 0 }}>black colored text</p>,
    explanation: 'unavailable or inactive items',
  },
  {
    key: 12,
    symbol: <p style={{ color: 'blue', margin: 0 }}>blue colored text</p>,
    explanation:
      'available or active items or items with unknown status (default color)',
  },
];

export default help;
