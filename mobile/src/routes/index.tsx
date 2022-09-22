import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { Hotel } from "../screens/Hotel";
import { Restaurantes } from "../screens/Restaurantes";
import { Turismo } from "../screens/Turismo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Header } from "../components/Header";
import { StackRoutes, StackRoutesHotel, StackRoutesRestaurante } from "./StackRoutes";

const Drawer = createDrawerNavigator();

export function Routes() {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: colors.gray[100],
        },
        drawerActiveBackgroundColor: colors.green[400],
        drawerActiveTintColor: colors.gray[100],
      }}
    >
      <Drawer.Screen
        name="Turismo"
        component={StackRoutes}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="airplane" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Hotel"
        component={StackRoutesHotel}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="bed" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Restaurante"
        component={StackRoutesRestaurante}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}