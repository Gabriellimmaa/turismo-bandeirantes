import { Image, VStack } from 'native-base'
import logo from '../assets/logoTurismo.png'

export function Loading() {
  return (
    <VStack justifyContent="center" mt={-20} alignItems="center" px={6}  flex={1}>
      <Image resizeMode="contain"  source={logo} alt="image" />
    </VStack>
  )
}
