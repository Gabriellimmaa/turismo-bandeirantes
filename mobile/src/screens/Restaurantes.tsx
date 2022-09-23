import { CheckIcon, Flex, ScrollView, Select, Text, VStack } from "native-base";
import { useEffect, useRef, useState } from "react";
import { CardPrincipal } from "../components/Card/Principal";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import api from "../services/api";
import { PropsGeral } from "../utils/tipagens";
interface turismoProps {
  id: number
  nome: string
  descricao: string
  logo: string
  preco: string
  cardapio: string | null
  cozinhas: string
  telefone: string
  latitude: string
  longitude: string
  categoria: string
}

export function Restaurantes() {
  const [restaurantes, setRestaurantes] = useState<PropsGeral[]>()
  const [bares, setBares] = useState<PropsGeral[]>()
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    api.get('/restaurantes').then((response) => {
      const result = response.data.restaurantes
      setRestaurantes(result)
      setLoading1(true)
    })

    api.get('/bares').then((response) => {
      const result = response.data.bares
      setBares(result)
      setLoading2(true)
    })
  }, [])


  if (!loading1 || !loading2) {
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
            <Select.Item label="Restaurante" value="restaurante" />
            <Select.Item label="Lanchonete" value="lanchonete" />
            <Select.Item label="Bar" value="bar" />
            <Select.Item label="Pizzaria" value="pizzaria" />
            <Select.Item label="Padaria" value="padaria" />
          </Select>
        </Flex>

        {restaurantes!.map((item) => {
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
                tipo="Restaurante"
              />
            )
          } else if (filter === "restaurante") {
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
                tipo="Restaurante"
              />
            )
          }
          return null
        })}

        {bares!.map((item) => {
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
                tipo="Bar"
              />
            )
          } else if (filter === "bar") {
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
                tipo="Bar"
              />
            )
          }
          return null
        })}
      </ScrollView>
    </VStack>
  )
}