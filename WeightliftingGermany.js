import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import TabBar from './TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class WeightliftingGermany extends Component {
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={1}
      renderTabBar={() => <TabBar />}
      >
      <ScrollView tabLabel="ios-calendar" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Ansetzungen</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-podium" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Wettkämpfe</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-ribbon" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Tabelle</Text>
        </View>
      </ScrollView>
    </ScrollableTabView>
  }
};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
