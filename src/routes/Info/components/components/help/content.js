import React from 'react'
import {getMediaIcon} from 'utils/helpers'

const help = [
  { symbol: getMediaIcon('website'),
    explanation: 'website url',
  },
  { symbol: getMediaIcon('online'),
    explanation: 'game available online',
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
    explanation: 'game available for pc' +
    '(currently there is no distinction between linux, mac or windows)',
  },
  { symbol: getMediaIcon('demo'),
    explanation: 'available demo of the game',
  },
  { symbol: 'website icon sometimes appears twice',
    explanation: "one is for developer's website and the other for the publisher's",
  },
  { symbol: <p style={{color: 'red'}}>red colored text</p>,
    explanation: 'under development games',
  },
  { symbol: <p style={{color: 'black'}}>black colored text</p>,
    explanation: 'Unavailable games or inactive teams',
  },
  { symbol: <p style={{color: 'blue'}}>blue colored text</p>,
    explanation: 'Available games and active teams or items with unknown status (default color)',
  },
]

export default help
