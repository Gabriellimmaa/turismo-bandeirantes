import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Hotel } from '../screens/Hotel';
import { Restaurantes } from '../screens/Restaurantes';
import { Turismo } from '../screens/Turismo';

const Drawer = createDrawerNavigator();

export function Routes() {
  return (
    <NavigationContainer >
      <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Drawer.Screen name="Turismo" component={Turismo} />
        <Drawer.Screen name="Hotel" component={Hotel} />
        <Drawer.Screen name="Restaurante" component={Restaurantes} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}