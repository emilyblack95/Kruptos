import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <Image source={require("../assets/logo.png")} style={styles.image} />
        </Center>
        <Center horizontal>
          <TouchableOpacity style={styles.button} />
        </Center>
        <Center horizontal>
          <Text style={styles.text}>Begin</Text>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  image: {
    height: 147,
    width: 300,
    position: "absolute",
    top: "32.39%"
  },
  button: {
    height: 61,
    width: 213,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    top: "50.55%",
    opacity: 1
  },
  text: {
    top: 423.5,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 35,
    fontFamily: "BebasNeue-Regular",
    color: "rgba(255,255,255,1)"
  }
});
