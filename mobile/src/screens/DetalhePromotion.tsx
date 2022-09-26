import { ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import { DetalhePromocoes } from "../components/DetalheContainer/DetalhePromocoes";
import api from "../services/api";
import { PropsGeral } from "../utils/tipagens";

export function DetalhePromotion({ route }: any) {
  const [detalhe, setDetalhe] = useState<PropsGeral[]>([]);
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(0)

  useEffect(() => {
    async function verificaRota(){
      switch (route.params.id) {
        case 1:
          await api.get(`/restaurantes/1`)
          .then((response) => {
            setDetalhe(response.data.restaurantes)
            setLoading(true)
            setImage(1)
          })
          .catch(error => console.log(error));
          break;
        case 2: 
          await api.get(`/bares/1`)
          .then((response) => {
            setDetalhe(response.data.bares)
            setLoading(true)
            setImage(2)
          })
          .catch(error => console.log(error));
          break;
        default:
          break
      }
    }
    verificaRota();
  },[]);
  return (
    <VStack mb={10}>
      <ScrollView >
        {
          detalhe.map((item) => (
            <DetalhePromocoes
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
              image={image}
            />
          ))
        }
      </ScrollView>
    </VStack>
  );
}
