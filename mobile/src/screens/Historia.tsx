import { AspectRatio, Box, Button, FormControl, Heading, HStack, Image, Input, ScrollView, Text, useTheme, View, VStack, WarningOutlineIcon } from "native-base";
import { Header } from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import Swiper from 'react-native-swiper'
export function Historia() {

    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <VStack flex={1} mb={10} bg="gray.100" >
            <Header />
            <ScrollView>
                <View
                    flex={1}
                    alignItems="center"
                    justifyContent="center"
                    h={200}
                >
                    <Swiper
                        showsButtons={true}
                        loop
                        autoplay
                    >
                        <Image
                            source={require('../assets/album/album01.jpg')}
                            resizeMode="cover"
                            w="100%"
                            height={200}
                            flex={1}
                            alignItems="center"
                            justifyContent="center"
                            alt="Castelo"
                        />
                        <Image
                            source={require('../assets/album/album02.jpg')}
                            resizeMode="cover"
                            w="100%"
                            height={200}
                            flex={1}
                            alignItems="center"
                            justifyContent="center"
                            alt="Foto aerea"
                        />
                        <Image
                            source={require('../assets/album/album03.jpg')}
                            resizeMode="cover"
                            w="100%"
                            height={200}
                            flex={1}
                            alignItems="center"
                            justifyContent="center"
                            alt="Praça"
                        />
                        <Image
                            source={require('../assets/album/album04.jpg')}
                            resizeMode="cover"
                            w="100%"
                            height={200}
                            flex={1}
                            alignItems="center"
                            justifyContent="center"
                            alt="Estação"
                        />
                    </Swiper>
                </View>
                <Heading textAlign="center" mt={6} size="xl" px={5}>BANDEIRANTES</Heading>
                <VStack space={2} p={4}>
                    <Text my={2}>
                        Até o Ano de 1920, a região era um sertão bruto, habitado apenas pelos índios da tribo Caingangues. O primeiro a explorar este território foi o Engenheiro Carlos Borromei, onde ergue seu acampamento em uma clareira aberta no meio das matas à margens do Ribeirão das Antas. Em 24 de dezembro de 1926, D. Josefina Alves de Lima, proprietária de grande gleba de terras na Fazenda Laranjinha, ao proceder a divisão desse imóvel, vendeu a João Manoel dos Santos dez alqueires de terra, destinados a fundação de um povoado, que deveria ser denominado Invernada.
                    </Text>
                    <Text my={2}>
                        Em 12 de abril de 1929, foi criado o Distrito de Invernada, como parte integrante do Município de Jacarezinho, sendo instalado no dia 8 de dezembro do mesmo ano. Em julho de 1930, a Empresa Ferroviária São Paulo - Paraná, inaugurou uma estação ferroviária, a 3 quilômetros do patrimônio de Invernada, que passou a denominar-se Bandeirantes, surgindo, então, um povoado nas proximidades da estação, em terreno de propriedade de Juvenal Mesquita. Em 27 de setembro de 1931, um pugilo de homens de boa vontade, iniciou um trabalho de coligação em favor do progresso da estação e, consequentemente, sobreveio a queda de Invernada, onde se achavam o cartório, a Coletoria Estadual, casas, hotéis, casas de comércio, farmácias, correios, etc.
                    </Text>
                    <Text my={2}>
                        Em 1932, o então Interventor Federal no Paraná, visitou Bandeirantes, notando que o povo desejava a criação do município. Houve a unificação dos dois povoados: Bandeirantes e Invernada. Dando inicio a história de Bandeirantes
                    </Text>
                </VStack>
                <Heading textAlign="center" mt={6} size="xl" px={5}>UM LUGAR DE FÉ, NATUREZA E TRADIÇÕES</Heading>
                <VStack space={2} p={4}>
                    <Text my={2}>
                    Localizada no Norte Pioneiro do Paraná, Bandeirantes se distingue pela terra fértil e pelo povo oriundo de diversas partes do Brasil e do mundo. O município tem forte influência dos paulistas, mineiros, italianos, japoneses e portugueses, origem primordial das vocações econômicas e turísticas do município.
                    </Text>
                    <Text my={2}>
                    A base da economia no município é o cultivo de uva fina de mesa, pimentão, pepino, cana-de-açúcar e, principalmente, soja e milho. Anualmente, a festa do Milho Verde movimenta a economia local.
                    </Text>
                </VStack>
            </ScrollView>
        </VStack>
    )
}