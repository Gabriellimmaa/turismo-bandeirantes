import { Center, HStack, StyledProps, Text } from "native-base";

interface HeaderProps extends StyledProps {
  title?: string;
}

export function Header({title, ...rest }: HeaderProps) {
  return (
    <HStack 
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.200"
      pb={6}
      pt={12}
      {...rest}
    >
      { title ? (
        <Text>{title}</Text>
      ): (
        <Text>Header</Text>
      )}
      </HStack>
  )
}