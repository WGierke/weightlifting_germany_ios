import React, { Component } from 'react';
import {Scene, Router, Modal} from 'react-native-router-flux';

import Home from './components/Home'
import NavigationDrawer from './components/NavigationDrawer'
import Season1A from './components/Season1A'

export default class WeightliftingGermany extends React.Component {
  render() {
    return <Router>
      <Scene key="modal" component={Modal} >
        <Scene key="root">
          <Scene key="home" title="Startseite" hideNavBar={true} component={Home} initial={true} />
          <Scene key="season1A" component={NavigationDrawer}>
            <Scene key="main">
              <Scene key="season1ATabs" title="1. Bundesliga - Staffel A" component={Season1A} />
            </Scene>
          </Scene>
        </Scene>
      </Scene>
    </Router>
  }
}
