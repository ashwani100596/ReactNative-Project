import React, { component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./BottomNavigation/homeScreen";
import SettingsScreen from "./BottomNavigation/settingScreen";
import Notification from "./BottomNavigation/notification";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStackNavigator from "./StackNavigation/HomeStackNavigator";
// import { MyDrawer } from "./drawerContent";
// import Main from "./StackNavigation/Main";
// import Index from "./BottomNavigation/index";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from "@react-navigation/drawer";

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Feed Screen</Text>
//       <Button
//         title="Open drawer"
//         onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//       />
//       <Button
//         title="Toggle drawer"
//         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
//       />
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const HomeStackNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#9AC4F8",
//         },
//         headerTintColor: "white",
//         headerBackTitle: "Back",
//       }}
//     >
//       <Stack.Screen name="HomePage" component={HomePage} />
//       <Stack.Screen name="Scroll" component={Scroll} />
//     </Stack.Navigator>
//   );
// };

const MainStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list";
          } else if (route.name === "Notification") {
            iconName = focused ? "ios-person" : "ios-person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
};
export default MainStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: Constants.statusBarHeight,
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
