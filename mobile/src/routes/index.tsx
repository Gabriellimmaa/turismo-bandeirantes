import { NavigationContainer } from '@react-navigation/native';
import { Turismo } from '../screens/Turismo';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Restaurantes } from '../screens/Restaurantes';
import { Hotel } from '../screens/Hotel';
const Tab = createMaterialBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer >
      <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "tomato" }}
      >
      <Tab.Screen
        name="Home"
        component={Turismo}
        options={{
          tabBarLabel: "Turismo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="airplane" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurantes"
        component={Restaurantes}
        options={{
          tabBarLabel: "Restaurantes",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Hotel"
        component={Hotel}
        options={{
          tabBarLabel: "Hotel",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bed" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  )
}