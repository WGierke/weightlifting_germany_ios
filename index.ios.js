import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NavigationBar from 'react-native-navbar';

class WeightliftingGermany extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ff9900', }}>
        <NavigationBar
          title={{ title: 'Title', }}
          leftButton={{ title: 'Back', }}
          rightButton={{ title: 'Forward', }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('WeightliftingGermany', () => WeightliftingGermany);
