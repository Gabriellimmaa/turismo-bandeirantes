import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StackRoutes, StackRoutesHotel, StackRoutesPromocoes, StackRoutesRestaurante } from "./StackRoutes";
import { Home } from "../screens/Home";
import { Contato } from "../screens/Contato";
import { Historia } from "../screens/Historia";
import { Comunicado } from "../screens/Comunicado";

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
        drawerActiveBackgroundColor: colors.green[600],
        drawerActiveTintColor: colors.gray[100],
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={Home}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Historia"
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
      <Drawer.Screen
        name="Promocoes"
        component={StackRoutesPromocoes}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="ticket-percent" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Comunicados"
        component={Comunicado}
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