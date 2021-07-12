import "react-native-gesture-handler";
import React from "react";

import Home from "./screens/home";
import Content from "./screens/addpost";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme, AppearanceProvider } from "react-native-appearance";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
// const BottomTab = createMaterialBottomTabNavigator();
const linking = {
  prefixes: ["recipes://"],
  config: {
    screens: {
      Home: "feed/:title",
      Content: "detail/:foodName",

      TopTabs: {
        path: "top_tabs",
        screens: {
          Tab1: {
            path: "tTab1",
            exact: true,
          },
          Tab2: {
            path: "tTab2",
            exact: true,
          },
          Tab3: {
            path: "tTab3",
            exact: true,
          },
        },
      },
    },
  },
};

export default function App() {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="Add New Post" component={Content}></Stack.Screen>
    </Stack.Navigator>
  );

  return (
    <>
      <AppearanceProvider>
        <NavigationContainer linking={linking}>
          {createHomeStack()}
        </NavigationContainer>
      </AppearanceProvider>
    </>
  );
}
