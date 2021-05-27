import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import theme from './theme/theme';
import Main from './layers/pages/sublayers/main.view';


export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher position="absolute" top="0" right="0" />
      <Main />
    </ChakraProvider>
  )
}