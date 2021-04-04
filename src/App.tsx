import * as React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Routes from './routes/routes';

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher position="absolute" top="0" right="0" />
    <Routes />
  </ChakraProvider>
)
