import React, {TouchableHighlight} from 'react';
import {View, Text, StyleSheet, Image, ListView} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  }
});

class Home extends React.Component {
  constructor() {
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      pastCompetitions: [],
      dataSource: ds.cloneWithRows(['Keine Ansetzungen verfügbar'])
    };
  }

  _handleTextChange(event) {
    fetch('https://raw.githubusercontent.com/WGierke/weightlifting_germany/master/production/1A_competitions.json')
      .then((response) => response.json())
      .then((responseJSON) => { console.log(responseJSON[0].past_competitions);
        let names = responseJSON[0].past_competitions.map(x => x.home);
        this.setState({
          pastCompetitions: responseJSON[0].past_competitions,
          dataSource: this.state.dataSource.cloneWithRows(names)});
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render(){
    return (
      <View {...this.props} style={styles.container}>
        <Image source={require('../resources/cover_home.jpg')}
          // TODO: use device width
          style={{'width': 380}} resizeMode='contain'/>
        <Text>Willkommen</Text>
        <Button onPress={this._handleTextChange()}>Go to Register page</Button>
        {/*<Button onPress={()=>Actions.login({data:"Custom data", title:"Custom title" })}>Go to Login page</Button>
        <Button onPress={Actions.register}>Go to Register page</Button>
        <Button onPress={Actions.register2}>Go to Register page without animation</Button>
        <Button onPress={()=>Actions.error("Error message")}>Popup error</Button>
        <Button onPress={Actions.tabbar}>Go to TabBar page</Button>
        <Button onPress={Actions.switcher}>Go to switcher page</Button>
        <Button onPress={Actions.pop}>back</Button>*/}
        <Button onPress={() => { Actions.season1A(); }}>1. Bundesliga - Staffel A</Button>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
      </View>
    );
  }
}

module.exports = Home;
