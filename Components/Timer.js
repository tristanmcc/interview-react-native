import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { AppState } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInSeconds } from "date-fns";

export default function Timer() {
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 20) + 5);
  const [isActive, setIsActive] = useState(false);
  const appState = useRef(AppState.currentState);
  const [elapsed, setElapsed] = useState(0);

  //toggles whether timer should be counting
  function toggle() {
    setIsActive(!isActive);
  }

  //sets countdown 
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);
    return () => AppState.removeEventListener("change", handleAppStateChange);
  }, []);


  //comares app states to determine if App is in foreground or background
  const handleAppStateChange = async (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      const elapsed = await getElapsedTime();
      // Update the elapsed seconds state
      setElapsed(elapsed);
    }
    appState.current = nextAppState;
  };

  //compares current time with time on start of timer to get elapsed time
  const getElapsedTime = async () => {
    const startTime = await AsyncStorage.getItem("@start_time");
    const now = new Date();
    return differenceInSeconds(now, Date.parse(startTime));
  };

  //records time timer is started
  const recordStartTime = async () => {
    const now = new Date();
    await AsyncStorage.setItem("@start_time", now.toISOString());
  };

  return (
    <View>
      <View style={styles.listContainer}>
        <Text>{seconds - elapsed > 0 ? seconds - elapsed : "Done"}</Text>
        <View>
          {seconds - elapsed > 0 ? (
            <Button
              title={isActive ? "Pause" : "Start"}
              color="black"
              onPress={() => {
                toggle();
                recordStartTime();
              }}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 100,
    paddingVertical: 20,
    elevation: 5,
  },
});
