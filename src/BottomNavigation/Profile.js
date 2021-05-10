import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Profile = () => {
  const [selectImg, setSelectedImg] = useState("");
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      Alert.alert(
        "Permission Needed",
        "Permission to access camera is required!"
      );
      return;
    }
    let camerapicker = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    if (camerapicker.cancelled === true) {
      return;
    }
    setSelectedImg({ localUri: camerapicker.uri });
    close();
  };
  const openImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted === false) {
      Alert.alert(
        "Permission Needed",
        "Permission to access gallery is required!"
      );
      return;
    }
    let picker = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3],
    });
    if (picker.cancelled === true) {
      return;
    }
    setSelectedImg({ localUri: picker.uri });
    close();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      {selectImg !== "" ? (
        <Image
          style={styles.avatar}
          source={{
            uri:
              selectImg.localUri !== null
                ? selectImg.localUri
                : "https://bootdey.com/img/Content/avatar/avatar6.png",
          }}
        />
      ) : (
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
      )}
      <View style={styles.screenContainer}>
        <View style={styles.panel}>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => openCamera()}
          >
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.panel}>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => openImage()}
          >
            <Text style={styles.panelButtonTitle}>Choose from gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Ashwani kumar</Text>
          <Text style={styles.info}>Mobile developer</Text>
          <Text style={styles.description}>Mobile No 9634019874</Text>
        </View>
      </View>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 50,
    marginLeft: WIDTH - 280,
    flexDirection: "row",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  panel: {
    marginRight: 10,
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  panelButton: {
    width: WIDTH - 280,
    height: HEIGHT - 1800,
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#007BFF",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
