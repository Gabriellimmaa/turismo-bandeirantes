import { ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import { CardPrincipal } from "../components/Card/Principal";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import api from "../services/api";

export interface HoteisProps {
  id: number
  nome: string
  descricao: string
  preco?: number
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
  categoria?: string
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
            tipo="Hotel"
          />
        )) }
      </ScrollView>
    </VStack>
  )
}