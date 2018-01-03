import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import intl from 'react-intl-universal'

import Dashboard from './Dashboard'
import NotFound from './NotFound'
import JourneyList from './journey/JourneyList'
import SingleJourney from './journey/SingleJourney'
import NewJourney from './journey/NewJourney'

import SingleMilestone from './milestone/SingleMilestone'

const locales = {
  'en-US': require('../locales/en-US.json'),
  'de-DE': require('../locales/de-DE.json'),
  'sv-SE': require('../locales/sv-SE.json')
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      initDone: false,
      selectedLanguage: 'en-US'
    }
  }

  componentDidMount() {
    this.loadLocales(this.state.selectedLanguage)
  }

  componentWillUpdate() {
    const unsubscribe = this.props.store.subscribe(() => {
      let currentStore = this.props.store.getState()
      let lastItem = currentStore.localeChange.length
      if (lastItem !== -1) {
        let currentLocale =
          currentStore.localeChange[lastItem - 1].locale.locale
        this.setState({
          selectedLanguage: currentLocale
        })
        this.loadLocales(this.state.selectedLanguage)
        this.forceUpdate()
      } else {
        this.setState({
          selectedLanguage: 'en-US'
        })
        this.loadLocales(this.state.selectedLanguage)
      }
    })
  }

  loadLocales(lang) {
    intl
      .init({
        currentLocale: lang,
        locales
      })
      .then(() => {
        this.setState({ initDone: true })
      })
  }

  render() {
    return (
      <div>

        <h1>{intl.get('WELCOME')}</h1>
        <h2>{intl.get('JOURNEYDESC')}</h2>

        <Router>
          <main className="mx-0">
            <Route exact path="/" render={props => <Dashboard {...props} />} />
            <Route path="/404*" render={props => <NotFound {...props} />} />
            <Route
              exact
              path="/journeys"
              render={props => <JourneyList {...props} />}
            />
            <Route
              path="/journeys/:journey"
              render={props => <SingleJourney {...props} />}
            />
            <Route
              exact
              path="/journey/new"
              render={props => <NewJourney {...props} />}
            />
            <Route
              path="/milestones/:milestone"
              render={props => <SingleMilestone {...props} />}
            />
          </main>
        </Router>
      </div>
    )
  }
}
