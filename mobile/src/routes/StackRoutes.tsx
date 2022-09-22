import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detalhe } from '../screens/Detalhe';
import { Hotel } from '../screens/Hotel';
import { Restaurantes } from '../screens/Restaurantes';
import { Turismo } from '../screens/Turismo';

const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const Stack3 = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="TurismoStack" component={Turismo} />
      <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>
  );
}

export function StackRoutesHotel() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="HotelStack" component={Hotel} />
      <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>
  );
}

export function StackRoutesRestaurante() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="RestauranteStack" component={Restaurantes} />
      <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>
  );
}