import { ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import { CardHotel } from "../components/Card/Hotel";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import api from "../services/api";

export interface HoteisProps {
  id: number
  nome: string
  preco: number
  logo: string
  email: string
  site: string
  telefone: string
  latitude: string
  longitude: string
}

export function Hotel() {
  const [hoteis, setHoteis] = useState<HoteisProps[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    api.get('/hoteis').then((response) => {
      setHoteis(response.data.hoteis)
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
        { hoteis!.map((item) => (
          <CardHotel
            key={item.id}
            id={item.id}
            email={item.email}
            latitude={item.latitude}
            logo={item.logo}
            longitude={item.longitude}
            nome={item.nome}
            preco={item.preco}
            site={item.site}
            telefone={item.telefone}
          />
        )) }
      </ScrollView>
    </VStack>
  )
}