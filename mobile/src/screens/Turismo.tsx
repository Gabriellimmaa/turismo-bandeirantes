import { ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import { CardTurismo } from "../components/Card/Turismo";
import { Loading } from "../components/Loading";
import api from "../services/api";

export interface turismoProps {
  id: number
  nome: string
  descricao: string
  logo: string
  telefone: string
  latitude: string
  longitude: string
  categoria: string
}

export function Turismo() {
  const [turismo, setTurismo] = useState<turismoProps[]>([])
  const [loading, setLoading] = useState(true)
  const [religioso, setReligioso] = useState(true)
  const [cultural, setCultural] = useState(true)
  const [ecologico, setEcologico] = useState(true)

  useEffect(() => {
    api.get('/atracoes').then((response) => {
      setTurismo(response.data.atracoes)
      setLoading(false)
      setReligioso(false)
      setCultural(false)
      setEcologico(false)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <VStack flex={1} mt={10} mb={10} bg="gray.100" pt="2">
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
  );
}
