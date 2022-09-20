import { Button, Center, HStack, Image, StyledProps, useTheme, View, VStack } from "native-base";
import logo from '../assets/logo-banner.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

interface HeaderProps extends StyledProps {
  voltar?: boolean;
}


export function Header({voltar, ...rest }: HeaderProps) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  
  return (
    <SafeAreaView>
      <VStack
        mt={6} 
        w="full"
        justifyContent="space-between"
        alignItems="center"
        {...rest}
      >
        <HStack w="full" justifyContent="space-between"  alignItems="center" >
          { voltar ? (
            <Button ml="5" variant="ghost" _pressed={{bg: "green.200"}}  onPress={() => navigation.goBack() } >
                <MaterialCommunityIcons name="arrow-left" color={colors.green['700']} size={28} />
            </Button>
          ): (
            <Button ml="5" variant="ghost" _pressed={{bg: "green.200"}}  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } >
                <MaterialCommunityIcons name="menu" color={colors.green['700']} size={28} />
            </Button>
          )}
          <Center h="20" w="200">
            <Image resizeMode="contain"  source={logo} alt="image" />
          </Center>
          <View w={75} />
        </HStack>
      </VStack>
    </SafeAreaView>
  )
}