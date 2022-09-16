import { Box, Image } from 'native-base'
import logo from '../assets/logo-banner.png'

export function Loading() {
  return (
    <Box >
      <Image source={logo} />
    </Box>
  )
}
