import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Box, useTheme, VStack } from "native-base";
import { Hotel } from "../screens/Hotel";
import { Restaurantes } from "../screens/Restaurantes";
import { Turismo } from "../screens/Turismo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Header } from "../components/Header";
import { StackRoutes, StackRoutesHotel, StackRoutesRestaurante } from "./StackRoutes";
import { Home } from "../screens/Home";
import { Contato } from "../screens/Contato";
import { Historia } from "../screens/Historia";

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
        name="Início"
        component={Home}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Conheça Bandeirantes"
        component={Historia}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="hail" size={size} color={color} />
          ),
        }}
      />
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
        name="Hoteis"
        component={StackRoutesHotel}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="bed" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Restaurantes"
        component={StackRoutesRestaurante}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Promoções"
        component={Home}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="ticket-percent" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Comunicados"
        component={Home}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="bullhorn" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contato"
        component={Contato}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="chat-processing" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}