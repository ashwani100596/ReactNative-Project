import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const Scroll = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the MainPage screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Scroll;
