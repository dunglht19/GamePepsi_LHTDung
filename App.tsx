import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import PageMain from "./src/screens/PageMain";
import PageGame from "./src/screens/PageGame";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{ headerShown: false }}
          component={SignIn}
          name="SignIn"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={SignUp}
          name="SignUp"
        /> */}
         <Stack.Screen
          options={{ headerShown: false }}
          component={PageMain}
          name="PageMain"
        />
         <Stack.Screen
          options={{ headerShown: false }}
          component={PageGame}
          name="PageGame"
        />
      </Stack.Navigator>
      <StatusBar hidden />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
