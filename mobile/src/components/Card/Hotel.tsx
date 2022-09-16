import { AspectRatio, Box, Button, Center, Heading, HStack, Image, Link, Text, useTheme, View, VStack } from "native-base";
import { turismoProps } from "../../screens/Turismo";
import { limitDescription } from "../../utils";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HoteisProps } from "../../screens/Hotel";

export function CardHotel({
  id,
  nome,
  preco,
  logo,
  email,
  site,
  telefone,
  latitude,
  longitude,
}: HoteisProps) {
  const { colors } = useTheme();

  return (
    <Box alignItems="center" px={5} pb="12">
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
        <HStack justifyContent="space-between">
          <Heading fontWeight="bold" size="sm" >{nome} </Heading>
          <HStack space={2}>
            <MaterialCommunityIcons name="cash" color={colors.green['700']} size={20} />
            <Text color="green.700">R$ {preco}</Text>
          </HStack>
        </HStack>
        <Text >{email}</Text>
        <HStack space={2}>
          <MaterialCommunityIcons name="link" color={colors.green['700']} size={20} />
          <Link href={site}>
            <Text color="green.700">
              Visite nosso site
            </Text>
          </Link>
        </HStack>
        <HStack  space={2}  justifyContent="space-between">
          <HStack 
            pt={3}
            space={1}
          >
            <MaterialCommunityIcons name="phone" color={colors.gray['400']} size={20} />
            <Text>{telefone}</Text>
          </HStack>
          <HStack space={2}>
            <Button
              bg="green.700"
              _pressed={{bg: "green.400"}}
              borderRadius="md"
            >
              <Link
                href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              >
                <HStack space={2}>
                  <MaterialCommunityIcons name="google-maps" color={colors.gray['100']} size={20} />
                  <Text color="white">Abrir no Maps</Text>
                </HStack>
              </Link>
            </Button>
          </HStack>
        </HStack>
        
      </VStack>
    </Box>
  );
}
