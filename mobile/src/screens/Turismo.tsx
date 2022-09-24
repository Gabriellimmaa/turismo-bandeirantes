import { Box, Center, CheckIcon, Flex, ScrollView, Select, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import api from "../services/api";
import { CardPrincipal } from "../components/Card/Principal";
import { PropsGeral } from "../utils/tipagens";

export function Turismo() {
  const [turismo, setTurismo] = useState<PropsGeral[]>([])
  const [loading, setLoading] = useState(false)
  const [religioso, setReligioso] = useState(true)
  const [cultural, setCultural] = useState(true)
  const [ecologico, setEcologico] = useState(true)
  const [filter, setFilter] = useState<string>('')


  useEffect(() => {
    api.get('/atracoes').then((response) => {
      setTurismo(response.data.atracoes)
      setLoading(true)
      setReligioso(false)
      setCultural(false)
      setEcologico(false)
    })
  }, [])

  if (!loading) {
    return <Loading />
  }
  return (
    <VStack flex={1} mb={10} bg="gray.100" >
      <Header />

      <ScrollView pt={4} >
        
        <Flex direction="row" alignItems="center" justifyContent="center" w="100%" mb={3}>
          <Text>Odernar por:</Text>
          <Select mx={4} selectedValue={filter} minWidth={200} accessibilityLabel="Selecione uma opção" placeholder="Selecione uma opção" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
          }} mt={1} onValueChange={itemValue => setFilter(itemValue)}>
            <Select.Item label="Tudo" value="all" />
            <Select.Item label="Turismo Religioso" value="Religioso" />
            <Select.Item label="Turismo Cultural" value="Cultural" />
            <Select.Item label="Turismo Rural" value="Rural" />
            <Select.Item label="Turismo Esportivo" value="Esportivo" />
            <Select.Item label="Turismo Ecológico" value="Ecológico" />
          </Select>
        </Flex>

        {turismo.map((item) => {
          if (filter === 'all' || filter === '') {
            return (
              <CardPrincipal
                key={item.id}
                id={item.id}
                descricao={item.descricao}
                email={item.email}
                endereco={item.endereco}
                face={item.face}
                insta={item.insta}
                latitude={item.latitude}
                logo={item.logo}
                longitude={item.longitude}
                nome={item.nome}
                preco={item.preco}
                site={item.site}
                telefone={item.telefone}
                whats={item.whats}
                categoria={item.categoria}
                tipo="Turismo"
              />
            )
          } else if (item.categoria === filter) {
            return (
              <CardPrincipal
                key={item.id}
                id={item.id}
                descricao={item.descricao}
                email={item.email}
                endereco={item.endereco}
                face={item.face}
                insta={item.insta}
                latitude={item.latitude}
                logo={item.logo}
                longitude={item.longitude}
                nome={item.nome}
                preco={item.preco}
                site={item.site}
                telefone={item.telefone}
                whats={item.whats}
                categoria={item.categoria}
                tipo="Turismo"
              />
            )
          }
          return null
        })}
      </ScrollView>
    </VStack>
  );
}
