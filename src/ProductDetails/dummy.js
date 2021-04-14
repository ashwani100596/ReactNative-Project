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

    // <ScrollView>
    //   <View style={styles.center}>
    //     <Image style={styles.img} source={DummyData.details.fourth_pic} />

    //     <Text style={styles.textstyle}>{DummyData.details.ProductName}</Text>
    //     <Text style={styles.OffreStyle}>{DummyData.details.Offerprice}</Text>
    //     <Text style={styles.ActualStyle}>{DummyData.details.Actualprice}</Text>
    //     <AntDesign name="heart" size={24} color="red" />
    //     <Text>Safe</Text>
    //     <Text>Quality</Text>
    //     <Text>Fresh</Text>
    //     {/* <Icon name="Heart" /> */}
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


    return (
      <View style>
        <Text>
          hello world
        </Text>
      </View>
      // <View style={styles.center}>
      //   <FlatList
      //    data={DummyData}
      //    keyExtractor={(item) => item}
      //    renderItem={({ item }) => {
      //     return (
      //         <ProductDetails 
      //           <View>
      //           <Text>{DummyData.results[0].FruitName}</Text>
      //         </View>
      //         />
      //          />
      //   }
      //   />
        {/* <Text>{DummyData.results[1].FruitName}</Text> */}
        {/* <FlatList
          data={DummyData}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return <Text>ashwaniiiiiii</Text>;
          }}
        /> */}
        {/* <FlatList
          data={DummyData}
          // keyExtractor={(item) => item.ItemNo}
          renderItem={({ item }) => {
            console.log(DummyData.results[0].FruitName);
            return (
              <View>
                <Text>{DummyData.results[0].FruitName}</Text>
                <Text>ashwaniiiiiii</Text>
              </View>
            );
          }}
        /> */}
      // </View>
    );
  };
  const styles = StyleSheet.create({
    // // center: {
    // //   justifyContent: "center",
    // //   alignItems: "center",
    // //   textAlign: "center",
    // // },
    // textstyle: {
    //   flex: 2,
    //   // textAlign: "center",
    //   fontSize: 20,
    // },
    // img: {
    //   width: 400,
    //   height: 400,
    //   resizeMode: "cover",
    // },
    // OffreStyle: {
    //   color: "green",
    // },
    // ActualStyle: {
    //   color: "black",
    // },
  });
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
