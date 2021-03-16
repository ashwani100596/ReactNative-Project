import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the HomePage screen</Text>
      {/* <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("Scroll")} // We added an onPress event which would navigate to the About screen
      /> */}
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

export default About;
