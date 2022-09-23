import { AspectRatio, Box, Button, Flex, FormControl, Heading, HStack, Image, Input, ScrollView, Text, useTheme, View, VStack, WarningOutlineIcon } from "native-base";
import { Header } from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

export function Contato() {

    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <VStack flex={1} mb={10} bg="gray.100" >
            <Header />
            <ScrollView>
                <Heading textAlign="center" mt={6}>Contato</Heading>
                <HStack justifyContent="center" my={6} >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                        <MaterialCommunityIcons name="email" size={20} color={colors.gray[700]} />
                        <Text ml={2} fontSize="sm">
                            frontcode@gmail.com
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                        <MaterialCommunityIcons name="phone" size={20} color={colors.gray[700]} />
                        <Text ml={2} fontSize="sm">
                            (14) 99739-1223
                        </Text>
                    </View>
                </HStack>
                <Heading textAlign="center" mt={6}>Cadastre sua empresa</Heading>
                <Box alignItems="center">
                    <FormControl isInvalid w="85%">
                        {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Campo obrigatório
                    </FormControl.ErrorMessage> */}
                        <VStack py={5} borderBottomColor="black" borderBottomWidth={1}>
                            <FormControl.Label>Nome da empresa</FormControl.Label>
                            <Input placeholder="Insira o nome da empresa" />
                        </VStack>

                        <VStack py={5} borderBottomColor="black" borderBottomWidth={1}>
                            <Text fontSize="md" marginBottom={2}>Endereço</Text>
                            <FormControl.Label>Rua</FormControl.Label>
                            <Input placeholder="Insira a rua" />
                            <FormControl.Label>Bairro</FormControl.Label>
                            <Input placeholder="Insira o bairro" />
                            <FormControl.Label>Cidade</FormControl.Label>
                            <Input placeholder="Insira a cidade" />
                            <FormControl.Label>Estado</FormControl.Label>
                            <Input placeholder="Insira o estado" />
                        </VStack>

                        <VStack py={5} borderBottomColor="black" borderBottomWidth={1}>
                            <Text fontSize="md" marginBottom={2}>Contato</Text>
                            <FormControl.Label>Nome para contato</FormControl.Label>
                            <Input placeholder="Insira seu nome para contato" />
                            <FormControl.Label>Email</FormControl.Label>
                            <Input placeholder="Insira um email para contato" />
                            <FormControl.Label>Número de telefone</FormControl.Label>
                            <Input placeholder="(00) 0000-0000" keyboardType="numeric" />
                        </VStack>

                        <Button size="sm" colorScheme="success" my={5}>
                            <Text color="white">Enviar</Text>
                        </Button>
                    </FormControl>

                </Box>
            </ScrollView>
        </VStack>
    )
}