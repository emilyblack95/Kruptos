import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
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
      <View style={styles.root}>
        <BebasText style={styles.text}>ci·pher</BebasText>
        <ChanceryText style={styles.text2}>noun</ChanceryText>
        <BebasText style={styles.text3}>
          an algorithm for performing encryption or decryption—a series of
          well-defined steps that can be followed as a procedure.
        </BebasText>
        <FlatList
          style={styles.list}
          data={[{ key: "a" }, { key: "b" }]}
          renderItem={({ item }) => {
            return (

              <AwesomeButton
                type="primary"
                backgroundColor="#e5e5e5"
                backgroundDarker="#C0C0C0"
                textColor="#00000"
                onPress={() => {
                  this.props.navigation.push('Home');
                }}><BebasText style={styles.text4}>{item.key}</BebasText></AwesomeButton>

              // //TODO: change page
              // <TouchableOpacity onPress={() => {this.props.navigation.push('Home');}}>
              //   <View style={styles.rect}>
              //     <BebasText style={styles.text4}>{item.key}</BebasText>
              //   </View>
              // </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
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
    justifyContent: 'center',
    alignItems: 'center'
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
