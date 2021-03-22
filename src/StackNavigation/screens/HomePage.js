import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Button,
} from "react-native";
import { ApiUrl } from "../../../api/ApiUrl";
import Music from "./Music.js";

export default HomePage = ({ navigation }) => {
  const [Songs, setSongs] = useState([]);

  useEffect(() => {
    getSongsFromApi();
  }, []);

  const getSongsFromApi = async () => {
    try {
      const response = await ApiUrl.get("search?term=Michael+jackson");

      return setSongs(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View>
      <ImageBackground
        style={styles.hello}
        source={require("../../../images/jaction.jpg")}
      ></ImageBackground>
      <FlatList
        data={Songs.results}
        keyExtractor={(index) => index.key}
        renderItem={({ item }) => {
          return <Music item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hello: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.7,
  },
});
