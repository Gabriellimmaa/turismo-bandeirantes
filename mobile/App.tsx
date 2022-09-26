import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { THEME } from "./src/styles/theme";
import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import OneSignal from 'react-native-onesignal';

export default function App() {
  OneSignal.setAppId('cc264496-5b6c-47ce-99e8-250b733a09a1');

  OneSignal.promptForPushNotificationsWithUserResponse();

  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    let notification = notificationReceivedEvent.getNotification();
    const data = notification.additionalData
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  });

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log("OneSignal: notification opened:", notification);
  });

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
