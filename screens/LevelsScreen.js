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
            }} style={styles.rect}><BebasText style={styles.text2}>Baconian</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Bazeries</BebasText>
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
           }} style={styles.rect}><BebasText style={styles.text2}>Bifid</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Cadenus</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Checkerboard</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Complete Columnar Transposition</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Condi</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Conjugated Matrix Bifid</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Digrafid</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Foursquare</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Fractionated Morse</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Grandpré</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Grille</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Gromark</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Gronsfeld</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Headlines</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Homophonic</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Incomplete Columnar</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Interrupted Key</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Key Phrase</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Monome-Dinome</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Morbit</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Myszkowski</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Nicodemus</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Nihilist Substitution</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Nihilist Transposition</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Null</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Numbered Key</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Periodic Gromark</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Phillips</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Phillips-Rc</BebasText>
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
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Pollux</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Porta</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Portax</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Progressive Key</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Quagmire I</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Quagmire Ii</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Quagmire Iii</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Quagmire Iv</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Ragbaby</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Railfence</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Redefence</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Route Transposition</BebasText>
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
           }} style={styles.rect}><BebasText style={styles.text2}>Seriated Playfair</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Slidefair</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Swagman</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Syllabary</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Tridigital</BebasText>
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
           }} style={styles.rect}><BebasText style={styles.text2}>Tri-Square</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Twin Bifid</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Twin Trifid</BebasText>
          </AwesomeButton>
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
           }} style={styles.rect}><BebasText style={styles.text2}>Variant</BebasText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><BebasText style={styles.text2}>Vigenère</BebasText>
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
