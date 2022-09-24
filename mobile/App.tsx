import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { THEME } from "./src/styles/theme";
import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import OneSignal from 'react-native-onesignal';

export default function App() {
  // const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  // idSignal = 4f8052cc-00a2-47d8-8f4d-be264a6860a3

  OneSignal.setAppId('4f8052cc-00a2-47d8-8f4d-be264a6860a3');

  OneSignal.promptForPushNotificationsWithUserResponse();

  OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log("notification: ", notification);
    const data = notification.additionalData
    console.log("additionalData: ", data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  });
  
  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log("OneSignal: notification opened:", notification);
  });

  function onOpned(result:any){
    console.log('Mensagem: ', result.notification.payload.body);
  }

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