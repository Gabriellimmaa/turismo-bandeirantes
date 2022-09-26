import { Button, Heading, Text, VStack } from "native-base";
import { limitDescription } from "../../utils";

interface CardComunicadoProps {
  titulo: string;
  dataEmissao: string;
  descricao: string;
}

export function CardComunicado({
  titulo,
  dataEmissao,
  descricao,
}:CardComunicadoProps){
  return (
    <VStack mx={4} space={2}>
      <Heading>{titulo}</Heading>
      <Text>{dataEmissao}</Text>
      
      { descricao.length > 160 && 
        <>
          <Text>{limitDescription(descricao)}</Text>
          <Button   _pressed={{bg: "green.200"}} variant="ghost" borderBottomWidth={1} borderColor="gray.200">Ver mais</Button> 
        </>
      }
    </VStack>
  )
}