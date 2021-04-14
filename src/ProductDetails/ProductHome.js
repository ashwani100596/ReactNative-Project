import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useMemo } from "react";
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
import { Dimensions } from "react-native";
// import ProductDetails from "./ProductDetails";
// import { AntDesign } from "@expo/vector-icons";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const ProductHome = ({ navigation }) => {
  const Slide = ({ data }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log(data);
            navigation.navigate("ProductDetails", {
              param: data,
            });
          }}
        >
          <View
            style={{
              // flex: 0.4,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Image source={{ uri: data.FruitImg1 }} style={styles.image} />
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.productName}>{data.FruitName}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <AntDesign name="star" size={24} color="red" />
                <AntDesign name="star" size={24} color="red" />
                <AntDesign name="star" size={24} color="red" />
                <AntDesign name="star" size={24} color="red" />
              </View>
            </View>

            <View style={styles.PriceContainer}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  fontSize: 20,
                }}
              >
                <Text style={{ fontSize: 20 }}>Price </Text>
              </View>
              <Text style={styles.offerPrice}>{data.fruitPrice} </Text>
              <Text style={styles.originalPric}> $-20</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  // const render = useMemo(
  //   () => ({ item }) => {
  //     return <Slide item={item} />;
  //   },
  //   []
  // );
  return (
    <FlatList
      data={DummyData.results}
      keyExtractor={(index) => index.ItemNo.toString()}
      // renderItem={render}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
    />
  );
};
const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    width: windowWidth,
  },
  productName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  PriceContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    // justifyContent: "flex-start",
  },
  originalPric: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    // margin: 12,
  },
  offerPrice: {
    color: "#3EA806",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default ProductHome;
