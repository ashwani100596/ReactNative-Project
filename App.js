import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import Head from "./head";

export default function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  return splash ? (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/blur.jpg")} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Hello Welcome to CrownStack</Text>
      <Head />
      <Text>Thank you for giving your valuable time</Text>
      <StatusBar style="auto" />
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
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
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
