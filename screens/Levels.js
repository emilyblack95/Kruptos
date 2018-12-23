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
              );
            }}
            ListHeaderComponent={({ highlighted }) => {
              return (
                <View style={styles.rect2}>
                  <Text style={styles.text5}>List Header</Text>
                </View>
              );
            }}
            ListFooterComponent={({ highlighted }) => {
              return (
                <View style={styles.rect3}>
                  <Text style={styles.text6}>List Footer</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={({}) => {
              return <View style={styles.rect4} />;
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
    height: 524,
    width: 324,
    top: 231,
    position: "absolute"
  },
  rect: {
    backgroundColor: "#ffffff",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  text4: {
    color: "#000000"
  },
  rect2: {
    padding: 15,
    backgroundColor: "#ffffff"
  },
  text5: {
    color: "#999999",
    fontSize: 13
  },
  rect3: {
    padding: 15,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#999999"
  },
  text6: {
    color: "#999999",
    fontSize: 14
  },
  rect4: {
    backgroundColor: "#999999",
    left: 15,
    height: 2
  }
});
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
              );
            }}
            ListHeaderComponent={({ highlighted }) => {
              return (
                <View style={styles.rect2}>
                  <Text style={styles.text5}>List Header</Text>
                </View>
              );
            }}
            ListFooterComponent={({ highlighted }) => {
              return (
                <View style={styles.rect3}>
                  <Text style={styles.text6}>List Footer</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={({}) => {
              return <View style={styles.rect4} />;
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
    height: 524,
    width: 324,
    top: 231,
    position: "absolute"
  },
  rect: {
    backgroundColor: "#ffffff",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  text4: {
    color: "#000000"
  },
  rect2: {
    padding: 15,
    backgroundColor: "#ffffff"
  },
  text5: {
    color: "#999999",
    fontSize: 13
  },
  rect3: {
    padding: 15,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#999999"
  },
  text6: {
    color: "#999999",
    fontSize: 14
  },
  rect4: {
    backgroundColor: "#999999",
    left: 15,
    height: 2
  }
});
