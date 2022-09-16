import { VStack } from "native-base";

export function Hotel() {
  return (
    <VStack flex={1} mt={10} mb={10} bg="gray.100">
      <ScrollView  >
        { turismo.map((item) => (
          <CardTurismo
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