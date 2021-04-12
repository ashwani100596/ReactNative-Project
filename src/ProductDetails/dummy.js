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
import DummyData from "./ProductData";

var ProductHome = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  // console.log(DummyData);

  const Item = ({ item, navigation }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductOffer")}
      style={[styles.item]}
    >
      <View>
        <Text style={[styles.titles]}>{item.ProductName}</Text>
        <Text style={[styles.titles]}>{item.description}</Text>
        {/* <Button
          title="Proceed to Checkout"
          onPress={() => navigation.navigate("ProductOffer")}
        /> */}
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? "white" : "black";

    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DummyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>

    // <ScrollView>
    //   <View style={styles.center}>
    //     <Image source={DummyData.details.fourth_pic} />
    //     {/* <Image source={DummyData.details.second_pic} />
    //     <Image source={DummyData.details.third_pic} /> */}
    //     <View>{/* <Text>{DummyData.details.title}</Text> */}</View>

    //     <Text style={styles.textstyle}>{DummyData.details.name}</Text>
    //     <Text>{DummyData.details.description}</Text>
    //     <Button
    //       title="Add to cart"
    //       onPress={() => navigation.navigate("AddToCart")}
    //     />
    //     <Button
    //       title="Shiping"
    //       onPress={() => navigation.navigate("Shiping")}
    //     />
    //     <Button
    //       title="Proceed to Checkout"
    //       onPress={() => navigation.navigate("ProductOffer")}
    //     />
    //   </View>
    // </ScrollView>
  );
};
const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textstyle: {
    textAlign: "center",
    fontSize: 30,
    color: "black",
  },
  img: {
    height: " %",
    width: "100%",
  },
});
export default ProductHome;
