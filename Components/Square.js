import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";

const Box = ({ scale = 1 }) => (
  <Animated.View
    style={[
      {
        width: 100,
        height: 100,
        backgroundColor: "#6cc9dd",
        transform: [{ scale }],
      },
    ]}
  />
);

const usePulse = (startDelay = 100) => {
  const scale = useRef(new Animated.Value(1)).current;

  const pulse = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.2 }),
      Animated.timing(scale, { toValue: 0.8 }),
    ]).start(() => pulse());
  };

  useEffect(() => {
    const timeout = setTimeout(() => pulse(), startDelay);
    return () => clearTimeout(timeout);
  }, []);

  return scale;
};

export default function Square() {
  const scale = usePulse();
  const scale2 = usePulse(100);

  return (
    <View style={styles.MainContainer}>
      <Box scale={scale2} backgroundColor="#6cc9dd" />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
});
