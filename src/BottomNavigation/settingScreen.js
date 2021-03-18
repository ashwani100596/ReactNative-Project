import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
const SettingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting!</Text>
    </View>
  );
};
export default SettingScreen;

const styles = StyleSheet.create({
  Text: {
    fontWeight: "bold",
    marginTop: 500,
    textAlign: "center",
  },
});
