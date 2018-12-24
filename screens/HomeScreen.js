import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import AwesomeButton from 'react-native-really-awesome-button';
import { BebasText } from '../components/BebasText';

// HomeScreen.js
// Renders logo and begin button
export default class HomeScreen extends Component {

  // Defines a null header
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      <BebasText style={styles.text}>Kruptos</BebasText>
      <AwesomeButton
        type="primary"
        backgroundColor="#e5e5e5"
        backgroundDarker="#C0C0C0"
        textColor="#00000"
        onPress={() => {
          this.props.navigation.push('Levels');
        }}><BebasText style={styles.text2}>Begin</BebasText></AwesomeButton>
      </View>
    );
  }
}

// Styles for HomeScreen.js
const styles = StyleSheet.create({
  container: {
    shadowColor: 'transparent',
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 95
  },
  text2: {
    backgroundColor: "transparent",
    fontSize: 25
  }
});
