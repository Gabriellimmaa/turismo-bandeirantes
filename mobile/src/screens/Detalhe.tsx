import { ScrollView, VStack } from "native-base";

import { useEffect, useState } from "react";
import { DetalhePrincipal } from "../components/DetalheContainer/DetalhePrincipal";
import { Loading } from "../components/Loading";
import api from "../services/api";
import apiLocal from "../services/apiLocal";
import { PropsGeral } from "../utils/tipagens";

export function Detalhe({ route }: any) {
  const [detalhe, setDetalhe] = useState<PropsGeral[]>([]);
  const [dataLocal, setDataLocal] = useState<{
    estrelas: number[]
    comentarios: object[]
  }>({ estrelas: [], comentarios: [] })
  const [stars, setStars] = useState(0)
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)

  useEffect(() => {
    async function verificaRota() {
      switch (route.params.rota) {
        case "Turismo":
          await api.get(`/atracoes/${route.params.id}`)
            .then((response) => {
              setDetalhe(response.data.atracoes);
              setLoading1(true)
            })
            .catch(error => console.log(error));

          await apiLocal.get(`turismo/${route.params.id}`)
            .then((response) => {
              const maiorValor = Math.max.apply(null, response.data.estrelas)
              const indexMaiorValor = response.data.estrelas.indexOf(maiorValor)
              setStars(indexMaiorValor + 1)
              setDataLocal(response.data)
              setLoading2(true)
            })
          break;
        case "Restaurante":
          await api.get(`/restaurantes/${route.params.id}`)
            .then((response) => {
              setDetalhe(response.data.restaurantes)
              setLoading1(true)
            })
            .catch(error => console.log(error));

          await apiLocal.get(`restaurante/${route.params.id}`)
            .then((response) => {
              const maiorValor = Math.max.apply(null, response.data.estrelas)
              const indexMaiorValor = response.data.estrelas.indexOf(maiorValor)
              setStars(indexMaiorValor + 1)
              setDataLocal(response.data)
              setLoading2(true)
            })
          break;
        case "Hotel":
          await api.get(`/hoteis/${route.params.id}`)
            .then((response) => {
              setDetalhe(response.data.hoteis)
              setLoading1(true)
            })
            .catch(error => console.log(error));

          await apiLocal.get(`hotel/${route.params.id}`)
            .then((response) => {
              const maiorValor = Math.max.apply(null, response.data.estrelas)
              const indexMaiorValor = response.data.estrelas.indexOf(maiorValor)
              setStars(indexMaiorValor + 1)
              setDataLocal(response.data)
              setLoading2(true)
            })
          break;
        case "Bar":
          await api.get(`/bares/${route.params.id}`)
            .then((response) => {
              setDetalhe(response.data.bares)
              setLoading1(true)
            })
            .catch(error => console.log(error));

          await apiLocal.get(`bar/${route.params.id}`)
            .then((response) => {
              const maiorValor = Math.max.apply(null, response.data.estrelas)
              const indexMaiorValor = response.data.estrelas.indexOf(maiorValor)
              setStars(indexMaiorValor + 1)
              setDataLocal(response.data)
              setLoading2(true)
            })
          break;
        default:
          break
      }
    }
    verificaRota();
  }, []);

  if (!loading1 || !loading2) {
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
              estrelasResult={stars}
              comentarios={dataLocal.comentarios}
              estrelas={dataLocal.estrelas}
            />
          ))
        }
      </ScrollView>
    </VStack>
  );
}
