import { AspectRatio, Button, Center, HStack, Image, StyledProps, Text, useTheme, View, VStack } from "native-base";
import logo from '../assets/logo-banner.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { SafeAreaView } from "react-navigation";

interface HeaderProps extends StyledProps {
  title?: string;
}


export function Header({title, ...rest }: HeaderProps) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <VStack 
        w="full"
        justifyContent="space-between"
        alignItems="center"
        {...rest}
      >
        <HStack w="full" justifyContent="space-between"  alignItems="center">
          <Button ml="5" variant="ghost" _pressed={{bg: "green.200"}}  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } >
              <MaterialCommunityIcons name="menu" color={colors.green['700']} size={30} />
          </Button>
          <Center h="20" w="200">
            <Image resizeMode="contain"  source={logo} alt="image" />
          </Center>
          <View w={33} />
        </HStack>
      </VStack>
    </SafeAreaView>
  )
}