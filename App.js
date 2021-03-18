import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/drawerContent/drawerNavigator";
// import Login from "./src/Login.js";

export default function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  return splash ? (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/blur.jpg")}
        style={{ width: "100%", height: "100%", opacity: 0.9 }}
      />
    </View>
  ) : (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    // <Login />
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
