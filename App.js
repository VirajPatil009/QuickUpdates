import "react-native-gesture-handler";
import React from "react";

import Home from "./screens/home";
import Content from "./screens/addpost";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider } from "react-native-appearance";
import { LogBox } from "react-native";
import _ from "lodash";

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);
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
        <NavigationContainer>{createHomeStack()}</NavigationContainer>
      </AppearanceProvider>
    </>
  );
}
