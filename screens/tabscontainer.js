import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Tab1 from "../tabs/Tab1";
import Tab2 from "../tabs/Tab2";
import Tab3 from "../tabs/Tab3";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const TopTab = createMaterialTopTabNavigator();

export default function Home() {
  //const navigation = useNavigation();
  return (
    <View style={styles.TabsC}>
      <TopTab.Navigator>
        <TopTab.Screen name="Tab1" component={Tab1} />
        <TopTab.Screen name="Tab2" component={Tab2} />
        <TopTab.Screen name="Tab3" component={Tab3} />
      </TopTab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  TabsC: {
    flex: 1,
    //margin: 24,
    width: windowWidth,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "blue",
    marginTop: -24,
  },
});
