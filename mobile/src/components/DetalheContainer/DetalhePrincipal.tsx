import { AspectRatio, Box, Button, FormControl, Heading, HStack, Image, Input, Link, Text, TextArea, useTheme, View, VStack } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, CommonActions } from "@react-navigation/native";

import { Rating, AirbnbRating } from 'react-native-ratings';

import instagramIMG from '../../assets/social/instagram.png'
import facebookIMG from '../../assets/social/facebook.png'
import whatsappIMG from '../../assets/social/whatsapp.png'
import { apenasNumeros } from "../../utils";
import { PropsGeral } from "../../utils/tipagens";
import apiLocal from "../../services/apiLocal";
import { useCallback, useEffect, useRef, useState } from "react";

export function DetalhePrincipal({
  id,
  nome,
  categoria,
  descricao,
  latitude,
  logo,
  longitude,
  endereco,
  telefone,
  face,
  insta,
  whats,
  site,
  tipo,
  estrelasResult,
  estrelas,
  comentarios,
}: PropsGeral) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [comments, setComments] = useState(comentarios);
  const stars = useRef(estrelas)
  const [estrelasData, setEstrelasData] = useState(stars.current)

  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  async function addComment() {
    await apiLocal.post(`/${tipo.toLowerCase()}/${id}/add-comment`, {
      username,
      text: commentText,
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      setComments(response.data.comentarios);
      setUsername('');
      setCommentText('');
    }).catch(error => {
      console.log(error);
    })
  }

  async function handleRating(ratingValue: number) {
    await apiLocal.post(`/${tipo.toLowerCase()}/${id}/feedback/${ratingValue}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const lista: number[] = [stars.current[0], stars.current[1], stars.current[2], stars.current[3], stars.current[4]]
    lista[ratingValue - 1] += 1
    stars.current = lista
    setEstrelasData(stars.current)
  }

  return (
    <VStack >
      <Box>
        <Box ml="5" zIndex={99} shadow={9}>
          <Button position="absolute" top={16} w={10} h={10} left={0} bg="gray.100" borderRadius={99} _pressed={{ bg: "gray.200" }}
            onPress={() => navigation.goBack()} >
            <Text position="absolute" top={-6} left={-14}><MaterialCommunityIcons name="chevron-left" color={colors.green['700']} size={28} /></Text>
          </Button>
        </Box>
        <AspectRatio w="100%" ratio={16 / 13}>
          <Image
            source={{
              uri: logo,
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <VStack px={5} pt={4} space={2}>
        <Heading >{nome}</Heading>
        <Text fontSize="md">Endereço: {endereco}</Text>
        <HStack mt={2} space={2} alignItems="center" justifyContent="space-between">
          <Text fontSize="md" >Categoria: {categoria}</Text>
          {telefone && (
            <HStack alignItems="center" space={1}>
              <MaterialCommunityIcons name="phone" color={colors.gray['400']} size={20} />
              <Text>{telefone}</Text>
            </HStack>
          )}
        </HStack>
        <HStack mt={2} space={2} alignItems="center" pt={2} w="full" justifyContent="space-between">
          {site && (
            <Link alignItems="center" h="10" href={site.indexOf('http') === -1 ? `http://${site}` : site} >
              <HStack textAlign="center" space={1}>
                <MaterialCommunityIcons name="link" color={colors.green['600']} size={28} />
                <Text alignItems="center" color="green.600" fontSize="md">visite o site</Text>
              </HStack>
            </Link>
          )}
          <HStack>
            {insta && (
              <Link justifyContent="flex-end" h="10" w="16" href={insta} >
                <Image resizeMode="contain" size={38} source={instagramIMG} alt="instagram" />
              </Link>
            )}
            {face && (
              <Link justifyContent="flex-end" h="10" w="16" href={face} >
                <Image resizeMode="contain" size={38} source={facebookIMG} alt="instagram" />
              </Link>
            )}
            {whats && (
              <Link justifyContent="flex-end" h="10" w="16" href={`https://api.whatsapp.com/send?phone=55${apenasNumeros(whats)}`} >
                <Image resizeMode="contain" size={38} source={whatsappIMG} alt="instagram" />
              </Link>
            )}
          </HStack>
        </HStack>
        <View borderBottomWidth={1} borderBottomColor="gray.400" py={2} />
        <Heading fontSize="xl" pt={1} bold>Descrição:</Heading>
        <Text fontSize="md" >{descricao}</Text>
        <View borderBottomWidth={1} borderBottomColor="gray.400" py={2} />
        <HStack space={2} mb={10}>
          <Button
            w="full"
            bg="green.700"
            _pressed={{ bg: "green.400" }}
            borderRadius="md"
          >
            <Link
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
            >
              <HStack space={2}>
                <MaterialCommunityIcons name="google-maps" color={colors.gray['100']} size={20} />
                <Text color="white">Abrir no Maps</Text>
              </HStack>
            </Link>
          </Button>
        </HStack>
        <VStack space={2} mb={10}>
          <View alignItems="center" flexDirection="row">
            <Text fontSize="md">{estrelasData[0] +
              estrelasData[1] +
              estrelasData[2] +
              estrelasData[3] +
              estrelasData[4]} avaliações</Text>
            <HStack marginLeft="auto">
              <Rating
                type='custom'
                startingValue={estrelasResult}
                jumpValue={1}
                ratingBackgroundColor='#c8c7c8'
                tintColor='#f0f0f3'
                ratingCount={5}
                imageSize={25}
                onFinishRating={handleRating}
                style={{ paddingVertical: 10 }}
              />
            </HStack>
          </View>
          <Heading fontSize="xl" pt={1} bold>Comentários:</Heading>
          <VStack>
            {comments.map((comment, key) => (
              <VStack key={key} space={1} py={3} borderBottomWidth={1} borderBottomColor="gray.700">
                <Text fontSize="md" fontWeight="bold" m={0}>{comment.username}</Text>
                <Text>{comment.text}</Text>
              </VStack>
            ))}
          </VStack>
          <FormControl>
            <Text fontWeight="bold" mb={1} mt={3}>Nome:</Text>
            <Input onChangeText={(value) => setUsername(value)} value={username} placeholder="Insira seu nome" />
            <Text fontWeight="bold" mb={1} mt={3}>Comentário:</Text>
            <TextArea onChangeText={(value) => setCommentText(value)} value={commentText} placeholder="Digite aqui seu comentário ou crítica construtiva" autoCompleteType={undefined} />
            <Button size="sm" colorScheme="blue" my={5} style={{ display: "flex" }} onPress={addComment}>
              <HStack space={2}>
                <MaterialCommunityIcons name="send" size={20} color="white" />
                <Text color="white">Enviar</Text>
              </HStack>
            </Button>
          </FormControl>
        </VStack>
      </VStack>
    </VStack>
  )
}