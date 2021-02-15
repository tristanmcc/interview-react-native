import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Square from "../Components/Square";

import Colors from "../Constants/Colors";

export default function StartGameScreen(props) {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Square />
      <View style={{ marginTop: 40 }}>
        <Button
          color="#f0e1a4"
          title="To Timer"
          onPress={() => {
            props.navigation.navigate("Timer");
          }}
        />
      </View>
    </View>
  );
}

StartGameScreen.navigationOptions = {
  headerTitleStyle: { alignSelf: "center" },
  title: "Square",
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accentColor,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
