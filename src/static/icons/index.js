import { InlineSvg } from 'static/inline-svg'

const Facebook = InlineSvg(require('!!raw-loader!./facebook.svg'))
const Twitter = InlineSvg(require('!!raw-loader!./twitter.svg'))
const Youtube = InlineSvg(require('!!raw-loader!./youTube.svg'))
const Website = InlineSvg(require('!!raw-loader!./website.svg'))
const Steam = InlineSvg(require('!!raw-loader!./steam.svg'))

export {
  Facebook,
  Twitter,
  Youtube,
  Website,
  Steam,
}
