import { NavigationContainer } from '@react-navigation/native';
import { Turismo } from '../screens/Turismo';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Restaurantes } from '../screens/Restaurantes';
import { Hotel } from '../screens/Hotel';
import { useTheme } from 'native-base';
const Tab = createMaterialBottomTabNavigator();

export function Routes() {
  const { colors } = useTheme();


  return (
    <NavigationContainer >
      <Tab.Navigator
      initialRouteName="Feed"
      activeColor={colors.green[900]}
      barStyle={{ backgroundColor: colors.gray['100'] }}
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