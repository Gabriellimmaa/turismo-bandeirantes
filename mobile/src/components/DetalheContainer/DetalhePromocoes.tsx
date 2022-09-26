import { AspectRatio, Box, Button, Heading, HStack, Image, Link, Text, useTheme, View, VStack } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { ImageURISource } from "react-native";

import instagramIMG from '../../assets/social/instagram.png'
import facebookIMG from '../../assets/social/facebook.png'
import whatsappIMG from '../../assets/social/whatsapp.png'
import { PropsGeral } from "../../utils/tipagens";
import { apenasNumeros } from "../../utils";
import cardapio from '../../assets/promocoes/cardapio.png'
import { useEffect } from "react";
import apiLocal from "../../services/apiLocal";

interface DetalhePromocoesProps extends PropsGeral {
  image: number
}

export function DetalhePromocoes({
  id,
  nome,
  categoria,
  descricao,
  latitude,
  logo,
  longitude,
  endereco,
  telefone,
  face,
  insta,
  whats,
  site,
  tipo,
  image
}: DetalhePromocoesProps) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <VStack >
      <Box>
        <Box ml="5" zIndex={99} shadow={9}>
          <Button position="absolute" top={16} w={10} h={10} left={0} bg="gray.100" borderRadius={99} _pressed={{ bg: "gray.200" }}
            onPress={() => navigation.goBack()} >
            <Text position="absolute" top={-6} left={-14}><MaterialCommunityIcons name="chevron-left" color={colors.green['700']} size={28} /></Text>
          </Button>
        </Box>
        <AspectRatio w="100%" ratio={16 / 13}>
          <Image
            source={{ uri: logo }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <VStack px={5} pt={4} space={2}>
        <Heading >{nome}</Heading>
        <Text fontSize="md">Endereço: {endereco}</Text>
        <HStack mt={2} space={2} alignItems="center" justifyContent="space-between">
          {telefone && (
            <HStack alignItems="center" space={1}>
              <MaterialCommunityIcons name="phone" color={colors.gray['400']} size={20} />
              <Text>{telefone}</Text>
            </HStack>
          )}
        </HStack>
        <HStack mt={2} space={2} alignItems="center" pt={2} w="full" justifyContent="space-between">
          <HStack>
            {insta && (
              <Link justifyContent="flex-end" h="10" w="16" href={insta} >
                <Image resizeMode="contain" size={38} source={instagramIMG} alt="instagram" />
              </Link>
            )}
            {whats && (
              <Link justifyContent="flex-end" h="10" w="16" href={`https://api.whatsapp.com/send?phone=55${apenasNumeros(whats)}`} >
                <Image resizeMode="contain" size={38} source={whatsappIMG} alt="instagram" />
              </Link>
            )}
          </HStack>
        </HStack>
        <View borderBottomWidth={1} borderBottomColor="gray.400" py={2} />
        {image === 1 ? (
          <VStack space={3}>
            <Text fontSize={16}>Confira nosso cardápio a baixo:</Text>
            <Image
              borderRadius={10}
              w="full"
              h={500}
              source={{ uri: 'https://marketplace.canva.com/EAE6kGiDEVU/1/0/1131w/canva-card%C3%A1pio-menu-pizzaria-pizzas-salgadas-e-doces-%28menu%29-G-eyXAJZt5Q.jpg' }}
              alt="image"
            />
          </VStack>
        ) : (
          <VStack space={3}>
            <Text fontSize={16}>Na compra de 3 chopes ganhe um espetinho grátis</Text>
            <Image
              borderRadius={10}
              w="full"
              h={500}
              source={{ uri: 'https://img.freepik.com/fotos-premium/carne-no-espeto-grelhada-no-fogo-e-um-copo-de-cerveja-prato-muito-popular-no-brasil_74692-897.jpg?w=2000' }}
              alt="image"
            />
          </VStack>
        )}

        <View borderBottomWidth={1} borderBottomColor="gray.400" py={2} />
        <HStack space={2} mb={10}>
          <Button
            w="full"
            bg="green.700"
            _pressed={{ bg: "green.400" }}
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
      </VStack>
    </VStack>
  )
}