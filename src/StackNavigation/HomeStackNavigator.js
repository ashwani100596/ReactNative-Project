import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./screens/HomePage";
import Scroll from "./screens/Scroll";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Scroll" component={Scroll} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
