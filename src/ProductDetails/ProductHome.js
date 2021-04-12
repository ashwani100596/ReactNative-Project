import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextComponent,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
// import Icon from "react-native-vector-icons";
import DummyData from "./ProductData";

var ProductHome = () => {
  return (
    <ScrollView>
      <View style={styles.center}>
        <Image style={styles.img} source={DummyData.details.fourth_pic} />

        <Text style={styles.textstyle}>{DummyData.details.ProductName}</Text>
        <Text style={styles.OffreStyle}>{DummyData.details.Offerprice}</Text>
        <Text style={styles.ActualStyle}>{DummyData.details.Actualprice}</Text>
        <AntDesign name="heart" size={24} color="red" />
        <Text>Safe</Text>
        <Text>Quality</Text>
        <Text>Fresh</Text>
        {/* <Icon name="Heart" /> */}
        <Text>{DummyData.details.description}</Text>

        <Button
          title="Add to cart"
          onPress={() => navigation.navigate("AddToCart")}
        />
        <Button
          title="Shiping"
          onPress={() => navigation.navigate("Shiping")}
        />
        <Button
          title="Proceed to Checkout"
          onPress={() => navigation.navigate("ProductOffer")}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  // center: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   textAlign: "center",
  // },
  textstyle: {
    flex: 2,
    // textAlign: "center",
    fontSize: 20,
  },
  img: {
    width: 400,
    height: 400,
    resizeMode: "cover",
  },
  OffreStyle: {
    color: "green",
  },
  ActualStyle: {
    color: "black",
  },
});
export default ProductHome;
