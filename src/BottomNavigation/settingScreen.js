import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Feed from "./feed";
// import Messages from "./message";

// const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();
const SettingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting!</Text>
    </View>
  );
  // <Tab.Navigator>
  //   <Tab.Screen name="Feed" component={Feed} />
  //   <Tab.Screen name="Messages" component={Messages} />
  // </Tab.Navigator>
  // <Button
  //   title="Go to Jane"
  //   onPress={() => navigation.navigate("ProfileScreen", { name: "Jane" })}
  // />
};
export default SettingScreen;

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
