import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  Text: {
    // width: 200,
    // height: 44,
    // padding: 10,
    // borderWidth: 1,
    // borderColor: "black",
    // marginBottom: 10,
    fontWeight: "bold",
    marginTop: 500,
    textAlign: "center",
  },
});
