import VideoGamesRoute from 'routes/VideoGames'

describe('(Route) VideoGames', () => {
  let _component

  beforeEach(() => {
    _component = VideoGamesRoute.component()
  })

  it('Should return a route configuration object', () => {
    expect(typeof VideoGamesRoute).to.equal('object')
  })

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div')
  })
})
