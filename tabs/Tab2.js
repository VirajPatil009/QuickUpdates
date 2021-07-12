import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function Tab1() {
  const isFocused = useIsFocused();

  console.log(isFocused);
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Tab 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
});