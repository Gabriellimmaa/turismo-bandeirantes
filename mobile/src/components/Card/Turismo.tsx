import { AspectRatio, Box, Center, Heading, HStack, Image, Link, Text, useTheme, View, VStack } from "native-base";
import { turismoProps } from "../../screens/Turismo";
import { limitDescription } from "../../utils";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function CardTurismo({
  id,
  nome,
  categoria,
  descricao,
  latitude,
  logo,
  longitude,
  telefone,
}: turismoProps) {
  const { colors } = useTheme();

  return (
    <Box alignItems="center" px={5} pt={4}>
      <Box
        rounded="lg"
        overflow="hidden"
        borderColor={colors.gray[100]}
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box rounded="lg">
          <AspectRatio w="100%" ratio={16 / 13}>
            <Image
              source={{
                uri: logo,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
      </Box>
      <VStack px={2} space={2} w="full" pt={3}>
        <Heading fontWeight="bold" size="sm" >{nome} </Heading>
        <Text >Categoria: {categoria}</Text>
        <HStack  space={2}  justifyContent="space-between">
          <HStack 
            py={1}
          >
            <MaterialCommunityIcons name="phone" color={colors.gray['400']} size={20} />
            <Text>{telefone}</Text>
          </HStack>
          <HStack space={2}>
            <Link
              px={3}
              py={1}
              borderRadius="md"
              bg="green.700"
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
            >
              <HStack space={2}>
                <MaterialCommunityIcons name="google-maps" color={colors.gray['100']} size={20} />
                <Text color="white">Abrir no Maps</Text>
              </HStack>
            </Link>
          </HStack>
        </HStack>
        
      </VStack>
    </Box>
  );
}
