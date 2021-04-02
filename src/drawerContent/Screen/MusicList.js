import React, { useState, useEffect, useMemo, useCallback } from "react";
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

const MusicList = ({ props, navigation }) => {
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
  const functiontoNavigate = (item) => {
    navigation.navigate("Details", {
      param: item,
    });
  };

  const render = useMemo(
    () => ({ item }) => {
      return (
        <Music
          item={item}
          functiontoNavigate={() => functiontoNavigate(item)}
        />
      );
    },
    [functiontoNavigate]
  );
  return (
    <View>
      <ImageBackground
        style={styles.hello}
        source={require("../../../images/jaction.jpg")}
      ></ImageBackground>
      <FlatList
        data={Songs.results}
        keyExtractor={(index) => index.key}
        // keyExtractor={(item) => item.key}
        renderItem={render}
        // onRefresh={getSongsFromApi}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  hello: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.7,
  },
});

export default MusicList;
