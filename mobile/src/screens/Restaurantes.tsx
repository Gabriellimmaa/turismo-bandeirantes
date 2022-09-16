import { ScrollView, VStack } from "native-base";
import { CardResaurante } from "../components/Card/Restaurante";

export function Restaurantes() {
  return (
    <VStack flex={1} bg="gray.100" >
      <ScrollView pt={4} >
        { turismo.map((item) => (
          <CardResaurante
            key={item.id}
            id={item.id}
            nome={item.nome}
            descricao={item.descricao}
            logo={item.logo}
            telefone={item.telefone}
            latitude={item.latitude}
            longitude={item.longitude}
            categoria={item.categoria}
          />
        )) }
      </ScrollView>
    </VStack>
  )
}