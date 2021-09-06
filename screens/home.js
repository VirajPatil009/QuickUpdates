import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import Tabs from "./tabscontainer";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Quick Updates</Text>
        {/* <View style={styles.button}>
          <MaterialIcons
            name="add-circle-outline"
            size={32}
            color="#333"
            onPress={() => navigation.navigate("Add New Post")}
          />
        </View> */}
      </View>

      <View style={styles.tabsContainer}>
        <Tabs />
        <FAB
          style={styles.fab}
          color="#333"
          // label="New Post"
          icon="plus"
          onPress={() => navigation.navigate("Add New Post")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerContainer: {
    height: 50,
    marginTop: 10,
    backgroundColor: "coral",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    // marginLeft: 90,
    marginTop: 7,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    marginLeft: 55,
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 60,
  },
});
