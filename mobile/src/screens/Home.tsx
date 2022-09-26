import { AspectRatio, Box, Button, Heading, HStack, Image, Text, useTheme, VStack } from "native-base";
import { Header } from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import logo from '../assets/album/santuario.jpg'

export function Home() {

  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <VStack flex={1} mb={10} bg="gray.100" >
      <Header />
      <Image
        w="full"
        h={300}
        source={logo}
        alt="image"
      />
      <Heading textAlign="center" mt={6}>Acesso Rápido</Heading>
      <HStack space={2} alignItems="center" mt={2} justifyContent="space-evenly" px={6}  >
        <VStack alignItems="center" mt={6} justifyContent="center" space={1}  >
          <Button onPress={() => navigation.navigate('Turismo')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="airplane" size={28} color={colors.green['600']} />
          </Button>
          <Text>Turismo</Text>
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Hotel')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="bed" size={28} color={colors.green['600']} />
          </Button>
          <Text>Hotel</Text>
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Restaurante')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="food" size={28} color={colors.green['600']} />
          </Button>
          <Text>Restaurante</Text>
        </VStack>
      </HStack>
      <HStack space={2} alignItems="center" mt={2} justifyContent="space-evenly" px={6}  >
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Historia')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="hail" size={28} color={colors.green['600']} />
          </Button>
          <Text>História</Text>
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1}  >
          <Button onPress={() => navigation.navigate('Promocoes')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="ticket-percent" size={28} color={colors.green['600']} />
          </Button>
          <Text>Promoções</Text>
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Comunicados')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="bullhorn" size={28} color={colors.green['600']} />
          </Button>
          <Text>Comunicados</Text>
        </VStack>
      </HStack>
    </VStack>
  )
}