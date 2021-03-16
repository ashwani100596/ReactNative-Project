import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
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
// import Notification from "./Screen/Notifications";
import Payment from "./Screen/Payment";
import Plans from "./Screen/Plans";
import Refrel from "./Screen/Refrel";
import Refrel from "./Screen/Refrel";
import Refrel from "./Screen/Refrel";
import HomeStackNavigator from "./StackNaviagtion/HomeStackNavigator";
import SettingScreen from "./BottomNavigation/settingScreen";
import Notification from "./BottomNavigation/notification";

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
// function Contacts({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Contacts</Text>
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
// function Favourites({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Favourites </Text>
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
// function Unsubscribe({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Unsubscribe </Text>
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

export default function drawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="EditProfile" component={EditProfile} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
        <Drawer.Screen name="Notification" component={Notification} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="Logout" component={Logout} />
        <Drawer.Screen name="ManageSubricption" component={ManageSubricption} />
        {/* <Drawer.Screen name="Notification" component={Notification} /> */}
        <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="Plans" component={Plans} />
        <Drawer.Screen name="Refrel" component={Refrel} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
