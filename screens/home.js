import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Tabs from "./tabscontainer";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quick Updates</Text>
        <View style={styles.button}>
          <MaterialIcons
            name="settings"
            size={32}
            color="#333"
            onPress={() => navigation.navigate("Add New Post")}
          />
        </View>
      </View>

      <View style={styles.Tabscontainer}>
        <View style={styles.center}>
          <Tabs />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Tabscontainer: {
    flex: 1,
    //  backgroundColor: "red",
  },
  header: {
    height: 45,
    backgroundColor: "coral",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 90,
    marginTop: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    marginRight: 10,
    justifyContent: "center",
  },
  center: {
    flex: 1,
    margin: 24,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title123: {
    color: "#000",
    fontSize: 32,
  },
});
