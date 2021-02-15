import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import AppNavigator from "./Navigation/AppNavigator";

export default function App() {
  return (
    <View style={styles.MainContainer}>
      <Header title="LabelCaster"></Header>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    height: "100%",
  },
  AppNav: {
    backgroundColor: "#f0e1a4",
  },
});
