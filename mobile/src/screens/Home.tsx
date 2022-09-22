import { AspectRatio, Box, Button, Heading, HStack, Image, Text, useTheme, VStack } from "native-base";
import { Header } from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export function Home() {

  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <VStack flex={1} mb={10} bg="gray.100" >
      <Header />
      <AspectRatio w="100%" ratio={16 / 13}>
          <Image
            source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/06/13/8f/69/santuario-sao-miguel.jpg"}}
            alt="image"
            />
      </AspectRatio>
      <Heading textAlign="center" mt={6}>Acesso Rápido</Heading>
      <HStack space={2} alignItems="center" mt={2} justifyContent="space-evenly" px={6}  >
        <VStack alignItems="center" mt={6} justifyContent="center" space={1}  >
          <Button onPress={() => navigation.navigate('Turismo')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.400" _pressed={{bg: "green.200"}}>
            <MaterialCommunityIcons name="airplane" size={28} color={colors.green['400']} />
          </Button>
          <Text>Atrativos Turísticos</Text>          
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Hotel')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.400" _pressed={{bg: "green.200"}}>
            <MaterialCommunityIcons name="bed" size={28} color={colors.green['400']} />
          </Button>
          <Text>Hotel</Text>          
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Restaurante')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.400" _pressed={{bg: "green.200"}}>
            <MaterialCommunityIcons name="food" size={28} color={colors.green['400']} />
          </Button>
          <Text>Restaurante</Text>          
        </VStack>
      </HStack>
    </VStack>
  )
}