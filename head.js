import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Head() {
  return (
    <View style={styles.container}>
      <TextInput placeholder={"xyz@gmail.com"} style={styles.inputText} />
      <TextInput placeholder={"Password"} style={styles.inputText} />
      <Button title={"Login"} style={styles.inputText} />
      <Text>CrownStack welcome you</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  inputText: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
