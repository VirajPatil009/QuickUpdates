import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Tab1 from "../tabs/Tab1";
import Tab2 from "../tabs/Tab2";
//import Tab3 from "../tabs/Tab3";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
//const windowHeight = Dimensions.get("window").height;
const TopTab = createMaterialBottomTabNavigator();

export default function Home() {
  //const navigation = useNavigation();
  return (
    <View style={styles.TabsC}>
      <TopTab.Navigator
        initialRouteName="Tab1"
        tabBarOptions={{
          activeTintColor: "#000",
        }}
      >
        <TopTab.Screen
          name="Tab1"
          component={Tab1}
          options={{
            tabBarLabel: "कथा",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="filter-tilt-shift"
                color={"#fff"}
                size={24}
              />
            ),
          }}
        />
        <TopTab.Screen
          name="Tab2"
          component={Tab2}
          options={{
            tabBarLabel: "विनोद",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="foundation" color={"#fff"} size={24} />
            ),
            //tabBarBadge: 3,
          }}
        />
        {/* <TopTab.Screen
          name="Tab3"
          component={Tab3}
          options={{
            tabBarLabel: "Tab3",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="games" color={"#fff"} size={24} />
            ),
          }}
        />*/}
      </TopTab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  TabsC: {
    flex: 1,
    width: windowWidth,
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
