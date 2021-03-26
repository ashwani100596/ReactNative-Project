import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import EditProfile from "./editProfile";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const EditProfileButton = ({ navigation, title }) => (
  <View>
    <TouchableOpacity
      onPress={() => {
        console.log("hello Ashwani");
        <EditProfile />;
      }}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
