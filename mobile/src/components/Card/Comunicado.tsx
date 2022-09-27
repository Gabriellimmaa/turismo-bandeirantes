import { Button, Heading, Text, VStack } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { limitDescription, limitDescriptionCustom } from "../../utils";

interface CardComunicadoProps {
  titulo: string;
  dataEmissao: string;
  descricao: string;
}

export function CardComunicado({
  titulo,
  dataEmissao,
  descricao,
}: CardComunicadoProps) {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"

  const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
  }

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <VStack mx={4} py={3} space={2} borderBottomWidth={1} borderColor="gray.200">
      <Heading>{titulo}</Heading>
      <Text>{dataEmissao}</Text>

      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 3}
      >
        {descricao}
      </Text>
      {
        lengthMore ? <Text
          onPress={toggleNumberOfLines}
          color="white"
          py={2}
          bg="green.700"
          w="full"
          textAlign="center"
          style={{ lineHeight: 21, marginTop: 5 }}>{textShown ? 'Ler menos...' : 'Ler mais...'}</Text>
          : null
      }
      {/* <Button onPress={toggleNumberOfLines} _pressed={{ bg: "green.200" }} variant="ghost" borderBottomWidth={1} borderColor="gray.200">Ler mais</Button> */}
    </VStack>
  )
}