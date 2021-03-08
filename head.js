import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
// import App from "/.navigation/Home.js";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen hello</Text>
//       <Button title="Details" onPress={() => navigation.navigate("Details")} />
//     </View>
//   );
// }

// function Details({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Hello how are you</Text>
//       <Text>Home Screen hello</Text>
//       <Button
//         title="Login your account"
//         onPress={() => navigation.navigate("login")}
//       />
//     </View>
//   );
// }
// const Stack = createStackNavigator();

export default function Head() {
  return (
    // <NavigationContainer initialRoutename="Home">
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: "Home" }}
    //     />
    //     <Stack.Screen
    //       name="Details"
    //       component={Details}
    //       options={{ title: "Details" }}
    //     />
    //     <Stack.Screen
    //       name="LoginPage"
    //       component={Login}
    //       options={{ title: "LoginPage" }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("./assets/blur.jpg")}
        style={{ width: "100%", height: "100%" }}
      > */}
      {/* <App /> */}
      <Text style={styles.paragraph}>Hello Welcome to The CrownStack</Text>
      <Login />
      {/* <Example /> */}
      {/* <TextInput placeholder={"xyz@gmail.com"} style={styles.inputText} />
        <TextInput placeholder={"Password"} style={styles.inputText} />
        <Button title={"Login"} style={styles.inputText} /> */}
      <Text style={styles.paragraph}>CrownStack</Text>
      {/* <Text style={styles.paragraph}>Thanks to all </Text> */}
      <StatusBar style="auto" />
      {/* </ImageBackground> */}
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
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  hello: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
