import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Text, FlatList } from "react-native";

export default class Levels extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <Text style={styles.text}>ci·pher</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.text2}>noun</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.text3}>
            an algorithm for performing encryption or decryption—a series of
            well-defined steps that can be followed as a procedure.
          </Text>
        </Center>
        <Center horizontal>
          <FlatList
            style={styles.list}
            renderItem={({ item, separators }) => {
              return (
                <View style={styles.rect}>
                  <Text style={styles.text4}>List Item</Text>
                </View>
                <View style={styles.rect}>
                  <Text style={styles.text4}>List Item</Text>
                </View>
                <View style={styles.rect}>
                  <Text style={styles.text4}>List Item</Text>
                </View>
                <View style={styles.rect}>
                  <Text style={styles.text4}>List Item</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={({}) => {
              return <View style={styles.rect3} />;
            }}
          />
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
  text: {
    top: 70.48,
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "BebasNeue-Regular",
    fontSize: 35
  },
  text2: {
    top: 104,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 15,
    fontFamily: "Apple-Chancery"
  },
  text3: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 25,
    fontFamily: "BebasNeue-Regular",
    top: 134.48,
    width: 303,
    height: 65,
    textAlign: "center"
  },
  list: {
    height: 494.9,
    width: 324,
    top: 269,
    position: "absolute"
  },
  rect: {
    backgroundColor: "transparent"
  },
  text4: {
    color: "#000000",
    fontFamily: "BebasNeue-Regular",
    fontSize: 20,
    textAlign: "center"
  },
  rect3: {
    padding: 10,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#999999"
  }
});
