import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import AwesomeButton from 'react-native-really-awesome-button';
import { PlayfairTextBold } from '../components/PlayfairTextBold';
import { PlayfairText } from '../components/PlayfairText';

{/* HomeScreen.js
    Renders logo and begin button */}
export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      <PlayfairTextBold style={styles.text}>Kruptos</PlayfairTextBold>
      <AwesomeButton
        type="primary"
        backgroundColor="#e5e5e5"
        backgroundDarker="#C0C0C0"
        textColor="#00000"
        width={200}
        onPress={() => {
          this.props.navigation.push('Levels');
        }}><PlayfairText style={styles.text2}>Begin</PlayfairText></AwesomeButton>
      </View>
    );
  }
}

{/* Styles for HomeScreen.js */}
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
    fontSize: 70
  },
  text2: {
    backgroundColor: "transparent",
    fontSize: 20
  }
});
