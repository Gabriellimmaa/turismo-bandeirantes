import { ScrollView, VStack } from "native-base";
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
        { turismo.map((item) => (
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
        )) }
      </ScrollView>
    </VStack>
  );
}
