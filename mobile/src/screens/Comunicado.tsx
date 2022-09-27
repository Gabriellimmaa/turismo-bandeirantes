import { ScrollView, VStack } from "native-base";
import { CardComunicado } from "../components/Card/Comunicado";
import { Header } from "../components/Header";

export function Comunicado() {
  return (
    <VStack flex={1} mb={10} bg="gray.100">
      <Header />
      <ScrollView pt={4} >
        <CardComunicado
          titulo="Registre sua empresa"
          dataEmissao="10/09/2022"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Donec euismod, nisl sit amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Donec euismod, nisl sit amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Donec euismod, nisl sit amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl."
        />
        <CardComunicado
          titulo="Atualização v1.0"
          dataEmissao="28/09/2022"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Donec euismod, nisl sit amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl."
        />
      </ScrollView>
    </VStack>
  )
}