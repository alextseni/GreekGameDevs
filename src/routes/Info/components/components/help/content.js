import React from 'react'
import {getMediaIcon} from 'utils/helpers'

const help = [
  { symbol: getMediaIcon('website'),
    explanation: 'website url',
  },
  { symbol: getMediaIcon('online'),
    explanation: 'game is playable online',
  },
  { symbol: getMediaIcon('steam'),
    explanation: 'link to steam',
  },
  { symbol: getMediaIcon('demo'),
    explanation: 'available demo of the game',
  },
  { symbol: getMediaIcon('indiedb'),
    explanation: 'link to IndieDB',
  },
  { symbol: getMediaIcon('pc'),
    explanation: 'game available for pc ' +
    '(currently there is no distinction between linux, mac or windows)',
  },
  { symbol: getMediaIcon('source'),
    explanation: 'source code available',
  },
  { symbol: 'website icon sometimes appears twice',
    explanation: "one is for the developer's website and the other for the publisher's",
  },
  { symbol: <p style={{color: 'red', margin: 0}}>red colored text</p>,
    explanation: 'game is under development or in beta',
  },
  { symbol: <p style={{color: 'black', margin: 0}}>black colored text</p>,
    explanation: 'unavailable games or inactive teams',
  },
  { symbol: <p style={{color: 'blue', margin: 0}}>blue colored text</p>,
    explanation: 'available games and active teams or items with unknown status (default color)',
  },
]

export default help
