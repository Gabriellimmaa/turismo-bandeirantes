import { ScrollView, VStack } from "native-base";
import { CardPromocoes } from "../components/Card/Promocoes";
import { Header } from "../components/Header";
import boraBora from '../assets/promocoes/boraBora.jpg'
import aguaDoce from '../assets/promocoes/aguaDoce.png'

export function Promocoes() {
  return (
    <VStack flex={1} mb={10} bg="gray.100">
      <Header />
      <ScrollView pt={4} >
        <CardPromocoes 
          title="Bora Bora"
          tipo="Cardápio"
          dataInicio="14/10/2022"
          dataFim="22/10/2022"
          logo={boraBora}
          id={1}
        />
        <CardPromocoes 
          title="Água Doce"
          tipo="Promoção"
          dataInicio="14/10/2022"
          dataFim="22/10/2022"
          logo={aguaDoce}
          id={2}
        />
      </ScrollView>
    </VStack>
  )
}