import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import TabBar from './components/TabBar';
import TabView from './components/TabView'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {Scene, Router, Modal} from 'react-native-router-flux';
import Home from './components/Home'
import NavigationDrawer from './components/NavigationDrawer'
import Season1A from './components/Season1A'

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
        );
    }
}

class Right extends React.Component {
    render(){
        return <Text style={{
        width: 80,
        height: 37,
        position: "absolute",
        bottom: 4,
        right: 2,
        padding: 8,
    }}>Right</Text>
    }
}

export default class WeightliftingGermany extends React.Component {
  render() {
    return <Router>
      <Scene key="modal" component={Modal} >
        <Scene key="root">
          <Scene key="tabbar" component={NavigationDrawer}>
            <Scene key="main" tabs={true} >
              <Scene key="tab1"  title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor:"red"}} titleStyle={{color:"white"}}>
                    <Scene key="tab1_1" component={TabView} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
                    <Scene key="tab1_2" component={TabView} title="Tab #1_2" titleStyle={{color:"black"}}/>
                </Scene>
                <Scene key="tab2" initial={true} title="Tab #2" icon={TabIcon}>
                    <Scene key="tab2_1" component={TabView} title="Tab #2_1" renderRightButton={()=><Right/>} />
                    <Scene key="tab2_2" component={TabView} title="Tab #2_2" hideBackImage onBack={()=>alert("Left button!")} backTitle="Left" duration={1} panHandlers={null}/>
                </Scene>
                <Scene key="tab3" component={TabView} title="Tab #3" hideTabBar={true} icon={TabIcon}/>
                <Scene key="tab4" component={TabView} title="Tab #4" hideNavBar={true} icon={TabIcon}/>
                <Scene key="tab5" component={TabView} title="Tab #5" hideTabBar={true} hideNavBar={true} icon={TabIcon}/>
            </Scene>
          </Scene>
          <Scene key="login" component={Season1A} title="Login"/>
        </Scene>
      </Scene>
    </Router>
  }
}

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
