import { AspectRatio, Box, Heading, HStack, Image, Text, useTheme, View, VStack } from "native-base";
import { turismoProps } from "../../screens/Turismo";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function DetalheTurismo({
  id,
  nome,
  categoria,
  descricao,
  latitude,
  logo,
  longitude,
  endereco,
  telefone,
}: turismoProps){
  const { colors } = useTheme();

  return (
    <VStack >
      <Box>
        <AspectRatio w="100%" ratio={16 / 13}>
          <Image
            source={{
              uri: logo,
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <VStack px={5} pt={4} space={2}>
        <Heading >{nome}</Heading>
        <Text fontSize="md">Endereço: {endereco}</Text>
        <HStack space={2} alignItems="center" justifyContent="space-between">
          <Text fontSize="md" >Categoria: {categoria}</Text>
          <HStack >
              <MaterialCommunityIcons name="phone" color={colors.gray['400']} size={20} />
              <Text>{telefone}</Text>
          </HStack>
        </HStack>
        <View borderBottomWidth={1} borderBottomColor="gray.400" py={2} />
        <Text fontSize="md" >{descricao}</Text>
      </VStack>
    </VStack>
  )
}