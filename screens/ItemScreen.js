import { StyleSheet, Text, ScrollView, View, TextInput, AsyncStorage } from 'react-native';
import { PlayfairText } from '../components/PlayfairText';
import { PlayfairTextBold } from '../components/PlayfairTextBold';
import React, { Component } from "react";
import AwesomeButton from 'react-native-really-awesome-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

{/* ItemScreen.js
    Renders specific cipher info, history and challenge */}
export default class ItemScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  };

  static navigationOptions = {
    header: null,
  };

  _storeData = async (screenNumber, finished) => {
    try {
      await AsyncStorage.setItem(screenNumber, finished);
    } catch (error) {
      return -1;
    }
  };

  _retrieveData = async (screenNumber) => {
    try {
      const value = await AsyncStorage.getItem(screenNumber);
     } catch (error) {
       return -1;
     }
  };

  _goBack(screenNumber, answer) {
    if(this.state.text === JSON.parse(answer)) {
      this._storeData (screenNumber, "true");
    }
    else {
      this._storeData (screenNumber, "false");
    }
    this.props.navigation.goBack();
  };

  _scrollToInput (reactNode: any) {
    this.scroll.props.scrollToFocusedInput(reactNode);
  };

  render() {
    const { navigation } = this.props;
    const screenNumber = navigation.getParam('screenNum', '-1');
    const name = navigation.getParam('name', 'nameBox');
    const info = navigation.getParam('info', 'infoBox');
    const history = navigation.getParam('history', 'historyBox');
    const example = navigation.getParam('example', 'exampleBox');
    const challenge = navigation.getParam('challenge', 'challengeBox');
    const answer = navigation.getParam('answer', 'answerBox');

    return (
      <KeyboardAwareScrollView innerRef={ref => {this.scroll = ref}}>
        <View style={styles.container}>
          <PlayfairTextBold style={styles.text}>{JSON.parse(JSON.stringify(name))}</PlayfairTextBold>
          <View style={{margin:10}}>
            <PlayfairTextBold style={styles.text3}>Information</PlayfairTextBold>
          </View>
          <View style={{margin:10}}>
            <PlayfairText style={styles.text2}>{JSON.parse(JSON.stringify(info))}</PlayfairText>
          </View>
          <View style={{margin:10}}>
            <PlayfairTextBold style={styles.text3}>History</PlayfairTextBold>
          </View>
          <View style={{margin:10}}>
            <PlayfairText style={styles.text2}>{JSON.parse(JSON.stringify(history))}</PlayfairText>
          </View>
          <View style={{margin:10}}>
            <PlayfairTextBold style={styles.text3}>Examples</PlayfairTextBold>
          </View>
          <View style={{margin:10}}>
            <PlayfairText style={styles.text2}>{JSON.parse(JSON.stringify(example))}</PlayfairText>
          </View>
          <View style={{margin:10}}>
            <PlayfairTextBold style={styles.text3}>Challenge</PlayfairTextBold>
          </View>
          <View style={{margin:10}}>
            <PlayfairText style={styles.text2}>{JSON.parse(JSON.stringify(challenge))}</PlayfairText>
          </View>
          <PlayfairText style={styles.text2}>Answer:</PlayfairText>
          <TextInput
          	maxLength={JSON.stringify(answer).length}
          	onChangeText={(text) => this.setState({ text })}
          	value={this.state.text}
          	style={{
              flex: 1,
              height: 50,
              alignSelf: "stretch",
              justifyContent: 'flex-start',
              alignItems: 'stretch',
              textAlign: "center",
              marginLeft: 20,
              marginRight:20,
              marginBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 5,
              borderColor: '#C0C0C0',
              borderWidth: 2,
              placeholder: this._retrieveData(JSON.stringify(screenNumber)) === "true" ? JSON.stringify(answer) : "",
              backgroundColor: this.state.text === JSON.parse(JSON.stringify(answer)) ? '#b3e5d1' : '#e5b3bf',
              placeholder: this.state.text === JSON.parse(JSON.stringify(answer)) ? JSON.parse(JSON.stringify(answer)) : ''}}
          />
          <AwesomeButton
            type="primary"
            backgroundColor="#e5e5e5"
            backgroundDarker="#C0C0C0"
            textColor="#00000"
            width={250}
            onPress={() => this._goBack(JSON.stringify(screenNumber), JSON.stringify(answer))}
            style={styles.rect2}><PlayfairText style={styles.text2}>Back</PlayfairText>
          </AwesomeButton>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

{/* Styles for ItemScreen.js */}
var styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: 'flex-start',
    alignItems: 'stretch'
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
    fontSize: 18
  },
  text3: {
    color: "#000000",
    textAlign: "center",
    fontSize: 20
  },
  rect2: {
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    marginTop: 5
  }
});
