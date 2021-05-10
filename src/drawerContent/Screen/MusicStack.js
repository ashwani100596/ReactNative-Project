import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailS from "./Details";
import Music from "./Music";
import MusicList from "./MusicList";
import Details from "./Details";

const StackMusic = createStackNavigator();

const MusicStack = () => {
  return (
    <StackMusic.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <StackMusic.Screen
        name="MusicScreen"
        component={MusicList}
        options={{
          title: "Music",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "black",
        }}
      />
      <StackMusic.Screen name="Details" component={Details} />
      <StackMusic.Screen name="Music" component={Music} />
    </StackMusic.Navigator>
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

export default MusicStack;
