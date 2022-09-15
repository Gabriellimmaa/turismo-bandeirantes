import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>

      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}