import {AppRegistry, StyleSheet, Text, ScrollView} from 'react-native';
import Panel from '../components/Panel';  // Step 1
import { BebasText } from '../components/BebasText';
import React, { Component } from "react";

// ItemScreen.js
// Renders specific cipher info, history and challenge
export default class ItemScreen extends Component {

  // Defines a null header
  // static navigationOptions = {
  //   header: null,
  // };

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'nameBox');
    const info = navigation.getParam('info', 'infoBox');
    const history = navigation.getParam('history', 'historyBox');
    const challenge = navigation.getParam('challenge', 'challengeBox');
    return (  //Step 2
      <ScrollView style={styles.container}>
        <BebasText style={styles.text}>{JSON.stringify(name)}</BebasText>
        <Panel title="Information">
          <Text style={styles.text2}>{JSON.stringify(info)}</Text>
        </Panel>
        <Panel title="History">
          <Text style={styles.text2}>{JSON.stringify(history)}</Text>
        </Panel>
        <Panel title="Challenge">
          <Text style={styles.text2}>{JSON.stringify(challenge)}</Text>
        </Panel>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  },
  text: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 35,
    marginTop: 35
  },
  text2: {
    color: "#000000",
    textAlign: "center",
    fontSize: 20
  }
});

AppRegistry.registerComponent('Panels', () => Panels);
