import { ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import { CardResaurante } from "../components/Card/Restaurante";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import api from "../services/api";

export interface RestaurantesProps {
  id: number
  nome: string
  descricao: string
  preco: number
  cardapio?: string
  logo: string
  email: string
  site: string
  telefone: string
  endereco: string
  latitude: string
  longitude: string
  face: string
  insta: string
  whats: string
}

export function Restaurantes() {
  const [restaurantes, setRestaurantes] = useState<RestaurantesProps[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    api.get('/restaurantes').then((response) => {
      setRestaurantes(response.data.restaurantes)
      setLoading(true)
    })
  }, [])

  if (!loading) {
    return <Loading />
  }

  return (
    <VStack flex={1} mb={10} bg="gray.100" >
      <Header />
      <ScrollView pt={4} >
        { restaurantes!.map((item) => (
          <CardResaurante
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
          />
        )) }
      </ScrollView>
    </VStack>
  )
}