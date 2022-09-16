import { AspectRatio, Center, HStack, Image, StyledProps, Text, VStack } from "native-base";

interface HeaderProps extends StyledProps {
  title?: string;
}

import logo from '../assets/logo-banner.png'

export function Header({title, ...rest }: HeaderProps) {
  return (
    <VStack 
      w="full"
      justifyContent="space-between"
      alignItems="center"
      {...rest}
      pt={8}
    >
      <Center  h="10" w="200">
        <Image resizeMode="contain"  source={logo} alt="image" />
      </Center>
    </VStack>
  )
}