import { InlineSvg } from 'static/inline-svg'

const Facebook = InlineSvg(require('!!raw-loader!./facebook.svg'))
const Twitter = InlineSvg(require('!!raw-loader!./twitter.svg'))
const Youtube = InlineSvg(require('!!raw-loader!./youTube.svg'))
const Website = InlineSvg(require('!!raw-loader!./website.svg'))
const Steam = InlineSvg(require('!!raw-loader!./steam.svg'))
const PlayStore = InlineSvg(require('!!raw-loader!./playstore.svg'))
const AppStore = InlineSvg(require('!!raw-loader!./appstore.svg'))
const LinkedIn = InlineSvg(require('!!raw-loader!./linkedin.svg'))
const WindowsStore = InlineSvg(require('!!raw-loader!./windowsstore.svg'))
const Demo = InlineSvg(require('!!raw-loader!./demo.svg'))
const Online = InlineSvg(require('!!raw-loader!./online.svg'))

const Info = InlineSvg(require('!!raw-loader!./info.svg'))
const NoFilter = InlineSvg(require('!!raw-loader!./nofilter.svg'))
const BackToTop = InlineSvg(require('!!raw-loader!./topArrow.svg'))

const VideoGames = InlineSvg(require('!!raw-loader!./gamepad.svg'))
const BoardGames = InlineSvg(require('!!raw-loader!./pawn.svg'))
const Mail = InlineSvg(require('!!raw-loader!./mail.svg'))

export {
  Facebook,
  BackToTop,
  BoardGames,
  Mail,
  VideoGames,
  Twitter,
  Youtube,
  Website,
  Steam,
  PlayStore,
  AppStore,
  LinkedIn,
  WindowsStore,
  Online,
  Demo,
  Info,
  NoFilter,
}