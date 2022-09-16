import React from "react";
import { NativeBaseProvider, Box, StatusBar, VStack } from "native-base";
import { THEME } from "./src/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Routes } from "./src/routes";
import 'react-native-gesture-handler';
import { Header } from "./src/components/Header";
import { SafeAreaView } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer >
        <SafeAreaView>
          <Header />
        </SafeAreaView>
        <VStack flex={1} bg="gray.100">
          <Routes />
        </VStack>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}