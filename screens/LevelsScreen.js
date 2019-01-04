import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { PlayfairText } from '../components/PlayfairText';
import { PlayfairTextBold } from '../components/PlayfairTextBold';
import AwesomeButton from 'react-native-really-awesome-button';

{/* LevelsScreen.js
    Renders definition and list of ciphers */}
export default class LevelsScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <PlayfairTextBold style={styles.text}>Cipher</PlayfairTextBold>
        <PlayfairText style={styles.text3}>
          An algorithm for performing encryption or decryption; A series of
          well-defined steps that can be followed as a procedure.
        </PlayfairText>
        <ScrollView style={styles.list}>
          <PlayfairTextBold style={styles.text4}>Concealment Ciphers</PlayfairTextBold>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
              {/* Parameter passing */}
              this.props.navigation.navigate('Item', {
                screenNum: "0",
                name: "Null Cipher",
                info: "A null cipher is an ancient form of encryption where the plaintext (unencrypted information) is mixed with a large amount of non-cipher material. Meaning one needs to discard certain characters in order to decrypt the message. Today it is regarded as a simple form of steganography, which can be used to hide ciphertext.",
                history: "Unfortunately, the Null Cipher's history was lost in antiquity. The name “Null Cipher” was given due to the fact that the message should have a greater number of null (or useless) letters, a few letters that hold significance, and a few letters which indicate the significant letters. Most concealment ciphers, like the Null Cipher, only depend on not being recognized as a cipher. Once recognized though, they have absolutely no defense in regards to being decrypted.",
                example: "Ciphertext: tHe grEat oLd pumPers\n" +
                "Answer: HELP\n" +
                "\n" +
                "Ciphertext: HE'S jumping OVER, right THERE\n" +
                "Answer: HE'S OVER THERE\n" +
                "\n" +
                "Ciphertext: David And Nathan Got Emma Running Railways Under Nyc\n" +
                "Answer: DANGERRUN",
                challenge: "Ciphertext: John, you need NOT run. Prince Charles comes NOT for your gold, but for your friendship. You need NOT the sword and shield, but open arms. He wants NOT hills of your swordsmen, nor villages of your citizens, but your companionship.\n",
                answer: "run for the hills"
              });
            }}
            style={styles.rect}><PlayfairText style={styles.text2}>Null</PlayfairText>
          </AwesomeButton>
          <PlayfairTextBold style={styles.text4}>Substitution Ciphers - Monoalphabetic</PlayfairTextBold>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
              this.props.navigation.push('Home');
            }} style={styles.rect}><PlayfairText style={styles.text2}>Atbash</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>ROT13</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Caesar</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Affine</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Baconian</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Polybius Square</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Simple</PlayfairText>
          </AwesomeButton>
          <PlayfairTextBold style={styles.text4}>Substitution Ciphers - Polyalphabetic</PlayfairTextBold>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Autokey</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Beaufort</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Nihilist</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Port</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Running Key</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Vingère/Gronsfeld</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Enigma</PlayfairText>
          </AwesomeButton>
          <PlayfairTextBold style={styles.text4}>Substitution Ciphers - Polygraphic</PlayfairTextBold>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Two-Square</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Hill</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Playfair</PlayfairText>
          </AwesomeButton>
          <PlayfairTextBold style={styles.text4}>Transposition Ciphers</PlayfairTextBold>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Rail-Fence</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Trifid</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Columnar</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Route</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Bifid</PlayfairText>
          </AwesomeButton>
          <PlayfairTextBold style={styles.text2}>The Unsolved</PlayfairTextBold>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Beale</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>D-Day Carrier Pigeon</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>D'Agapeyeff</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Dorabella</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Fenn</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Kryptos</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Markovian Parallax Denigrate</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Papyrus Oxyrhynchus 90</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>McCorkmick</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Shugborough</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Taman Shud</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Voynich</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>YOGTZE</PlayfairText>
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => {
             this.props.navigation.push('Home');
           }} style={styles.rect}><PlayfairText style={styles.text2}>Zodiac</PlayfairText>
          </AwesomeButton>
        </ScrollView>
      </View>
    );
  }
}

{/* Styles for LevelsScreen.js */}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 35,
    marginTop: 30
  },
  text2: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 20
  },
  text3: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  list: {
    flex: 3,
    alignSelf: "stretch",
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  rect: {
    alignSelf: "center",
    margin: 5
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
