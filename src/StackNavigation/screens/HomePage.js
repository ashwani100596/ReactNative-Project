import React from "react";
// import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from "react-native";
import axios from "axios";

export default HomePage = ({ navigation }) => {
  //   const ApiUrl = https://itunes.apple.com/search?term=Michael+jackson;
  //         keyExtractor={(item) => item.id}

  const Apicall = () => {
    axios
      .get("https://itunes.apple.com/search?term=Michael+jackson")
      .then(function (response) {
        console.log(response);
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        alert(error.message);
      })
      .finally(function () {
        alert("finall called");
      });
  };
  return (
    <FlatList
      data={}
      renderItem={}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
