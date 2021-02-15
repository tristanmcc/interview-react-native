import React, { useState } from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import CountDownCard from "../Components/CountDownCard";

import Colors from "../Constants/Colors";

export default function TimerScreen() {
  const [count, setCount] = useState(0);
  const [timerList, setTimerList] = useState([]);

  const addTimerHandler = () => {
    setTimerList((timerList) => [...timerList, count]);
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.MainContainer}>
          <View style={styles.ButtonStyle}>
            <Button
              title="New timer"
              color="black"
              onPress={() => {
                addTimerHandler();
                setCount(count + 1);
              }}
            />
          </View>
        </View>
        <View>
          {timerList.map((timer) => (
            <CountDownCard key={timer.index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

TimerScreen.navigationOptions = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: Colors.accentColor,
  },
  ButtonStyle: {
    marginBottom: 20,
  },
};

const styles = StyleSheet.create({
  MainContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
