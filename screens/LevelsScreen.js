import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { BebasText } from '../components/BebasText';
import { ChanceryText } from '../components/ChanceryText';
import AwesomeButton from 'react-native-really-awesome-button';

// LevelsScreen.js
// Renders definition and list of ciphers
export default class LevelsScreen extends Component {

  // Defines a null header
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <BebasText style={styles.text}>ci·pher</BebasText>
        <ChanceryText style={styles.text2}>noun</ChanceryText>
        <BebasText style={styles.text3}>
          an algorithm for performing encryption or decryption—a series of
          well-defined steps that can be followed as a procedure.
        </BebasText>
        <ScrollView style={styles.list}>
          <BebasText style={styles.text4}>Concealment Ciphers</BebasText>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
              this.props.navigation.push('Home');
            }} style={styles.rect}><BebasText style={styles.text2}>Null</BebasText>
          </AwesomeButton>
          <BebasText style={styles.text4}>Substitution Ciphers - Monoalphabetic</BebasText>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
              this.props.navigation.push('Home');
            }} style={styles.rect}><BebasText style={styles.text2}>Atbash</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>ROT13</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Caesar</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Affine</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Baconian</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Polybius Square</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Simple</BebasText>
          </AwesomeButton>
          <BebasText style={styles.text4}>Substitution Ciphers - Polyalphabetic</BebasText>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Autokey</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Beaufort</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Nihilist</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Port</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Running Key</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Vingère/Gronsfeld</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Enigma</BebasText>
          </AwesomeButton>
          <BebasText style={styles.text4}>Substitution Ciphers - Polygraphic</BebasText>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Two-Square</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Hill</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Playfair</BebasText>
          </AwesomeButton>
          <BebasText style={styles.text4}>Transposition Ciphers</BebasText>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Rail-Fence</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Trifid</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Columnar</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Route</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Bifid</BebasText>
          </AwesomeButton>
        </ScrollView>
      </View>
    );
  }
}

// Styles for LevelsScreen.js
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 35,
    marginTop: 35
  },
  text2: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 5
  },
  text3: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  list: {
    flex: 3,
    alignSelf: "stretch",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  rect: {
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5
  },
  text4: {
    color: "#000000",
    textAlign: "center",
    fontSize: 20
  },
  rect3: {
    padding: 10,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#999999"
  }
});
