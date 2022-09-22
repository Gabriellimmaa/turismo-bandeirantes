import { ScrollView, VStack } from "native-base";

import { useEffect, useState } from "react";
import { DetalhePrincipal } from "../components/DetalheContainer/DetalhePrincipal";
import { Loading } from "../components/Loading";
import api from "../services/api";
import { PropsGeral } from "../utils/tipagens";

export function Detalhe({ route }: any) {
  const [detalhe, setDetalhe] = useState<PropsGeral[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function verificaRota(){
      switch (route.params.rota) {
        case "Turismo":
          await api.get(`/atracoes/${route.params.id}`)
          .then((response) => {
            setDetalhe(response.data.atracoes);
            setLoading(true)
          })
          .catch(error => console.log(error));
          break;
        case "Restaurante":
          await api.get(`/restaurantes/${route.params.id}`)
          .then((response) => {
            setDetalhe(response.data.restaurantes)
            setLoading(true)
          })
          .catch(error => console.log(error));
          break;
        case "Hotel": 
          await api.get(`/hoteis/${route.params.id}`)
          .then((response) => {
            setDetalhe(response.data.hoteis)
            setLoading(true)
          })
          .catch(error => console.log(error));
          break;
        default:
          break
      }
    }
    verificaRota();
  }, []);

  if (!loading) {
    return <Loading />
  }

  return (
    <VStack mb={10} bg="gray.100">
      <ScrollView >
        {
          detalhe.map((item) => (
            <DetalhePrincipal
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
              face={item.face}
              insta={item.insta}
              site={item.site}
              whats={item.whats}
              email={item.email}
              cardapio={item.cardapio}
              preco={item.preco}
              tipo={route.params.rota}
            />
          ))
        }
      </ScrollView>
    </VStack>
  );
}
