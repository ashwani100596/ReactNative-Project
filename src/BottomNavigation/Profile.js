import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile! </Text>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  Text: {
    fontWeight: "bold",
    marginTop: 500,
    textAlign: "center",
  },
});
