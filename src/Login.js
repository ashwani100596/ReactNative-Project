import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Home from "./Home.js";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Login({ navigation }) {
  const { control, handleSubmit, errors } = useForm();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Hello Welcome to The CrownStack</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{
              paddingHorizontal: 20,
              borderWidth: 1,
              paddingVertical: 8,
              margin: 15,
              height: 10,
              borderColor: "#7a42f4",
              borderWidth: 1,
            }}
            style={styles.input}
            placeholder="Enter Your Username"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="UserName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.UserName && <Text>User Name is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter Your Password"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="Password"
        rules={{ required: true, minLength: 8 }}
        defaultValue=""
      />

      {errors.Password?.type === "required" && (
        <Text>Password is required.</Text>
      )}

      {errors.Password?.type === "minLength" && (
        <Text>Minimum 8 characters are required</Text>
      )}

      <Button
        style={styles.submitButtonText}
        title="Submit"
        onPress={handleSubmit((data) => {
          if (data !== "") {
            return navigation.navigate("Home");
          }
        })}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 8,
  },
  input: {
    margin: 15,
    width: 200,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    borderRadius: 45,
    paddingLeft: 45,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
