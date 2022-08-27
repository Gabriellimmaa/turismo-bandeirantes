import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </NativeBaseProvider>
  );
}