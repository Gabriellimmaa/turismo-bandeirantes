import { useNavigation,CommonActions } from "@react-navigation/native";
import { AspectRatio, Box, Button, Heading, HStack, Image, Text, useTheme, VStack } from "native-base";
import { ImageURISource } from "react-native";

interface CardPromocoesProps {
  title: string
  tipo: "Promoção" | "Cardápio"
  dataInicio: string
  dataFim: string
  logo: ImageURISource
  id: number
}

export function CardPromocoes({
  title,
  tipo,
  dataInicio,
  dataFim,
  logo,
  id
}:CardPromocoesProps) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Button  _pressed={{bg: "green.200"}} variant="ghost" onPress={() => navigation.dispatch(
      CommonActions.navigate({
        name: 'DetalhePromotion',
        params: {
          id,
          "rota": tipo
        },
      })
    )}>
      <HStack space={4} mx={4} >
        <Image 
          borderRadius={10}
          size="sm"
          w={100}
          height={100}
          source={logo}
          alt="image"
        />
        <VStack borderBottomWidth={1} w="2/3" borderColor="gray.200" >
          <Heading fontSize={18}>{title}</Heading>
          <Text fontSize="sm" color="gray.300">{dataInicio} à {dataFim}</Text>
          <Text fontSize="md" mt={4}>{tipo}</Text>
        </VStack>
      </HStack>
    </Button>
  )
}