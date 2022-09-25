import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { THEME } from "./src/styles/theme";
import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer >
      <NativeBaseProvider theme={THEME}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
