import * as React from "react";
import { View, Text, Button } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import EditProfile from "./Screen/EditProfile";
import Feedback from "./Screen/Feedback";
import Logout from "./Screen/Logout";
import ManageSubricption from "./Screen/ManageSubricption";
import Payment from "./Screen/Payment";
import Plans from "./Screen/Plans";
import Refrel from "./Screen/Refrel";
import MainStackNavigator from "../MainStackNavigator";
import SettingScreen from "../BottomNavigation/settingScreen";
import Notification from "../BottomNavigation/notification";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Logout" component={Logout} />
      <Drawer.Screen name="ManageSubricption" component={ManageSubricption} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Plans" component={Plans} />
      <Drawer.Screen name="Refrel" component={Refrel} />
    </Drawer.Navigator>
  );
}
