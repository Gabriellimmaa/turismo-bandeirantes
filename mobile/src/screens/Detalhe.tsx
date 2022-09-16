import { VStack } from "native-base";
import { Header } from "../components/Header";

import { NavigationProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { turismoProps } from "./Turismo";
import api from "../services/api";
import { DetalheTurismo } from "../components/DetalheContainer/Turismo";


export function Detalhe({ route }: any){
  const [turismo, setTurismo] = useState<turismoProps[]>([])
  const [loading, setLoading] = useState(true)
  const [religioso, setReligioso] = useState(true)
  const [cultural, setCultural] = useState(true)
  const [ecologico, setEcologico] = useState(true)
  
  useEffect(() => {
    if(route.params.rota === 'turismo'){
      api.get(`/atracoes/${route.params.id}`).then((response) => {
        setTurismo(response.data.atracoes)
        setLoading(false)
        setReligioso(false)
        setCultural(false)
        setEcologico(false)
      })
    }
  },[])
  return (
    <VStack  >
      <Header />
      { route.params.rota === 'turismo' ? (
        turismo.map((item) => (
          <DetalheTurismo
            key={item.id}
            id={item.id}
            nome={item.nome}
            descricao={item.descricao}
            logo={item.logo}
            telefone={item.telefone}
            latitude={item.latitude}
            longitude={item.longitude}
            categoria={item.categoria}
            endereco={item.endereco}
          />
        ))
      ): (
        <></>
      )}
    </VStack>
  )
}