import * as React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import { Router as TestRouter } from "react-router";
import { createMemoryHistory } from "history";
import { render, RenderOptions, fireEvent, act, screen, cleanup } from "@testing-library/react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import Routes from "../layers/routes/routes";

const renderSpecificReactComponent = (ui: React.ReactElement, options?: RenderOptions) =>{
  const AllProviders = ({ children }: { children?: React.ReactNode }) => (
    <ChakraProvider theme={theme}>
      <Router>
        {children}
      </Router>
    </ChakraProvider>
  )
  return render(ui, { wrapper: AllProviders, ...options })
}

const renderThroughRouter = async (route: string) => {
  const history = createMemoryHistory();
  history.push(route);
  
  await act(async () => {
    render(
      <ChakraProvider theme={theme}>
        <TestRouter history={history}>
            <Routes />
        </TestRouter>
      </ChakraProvider>
    );
  })

  return;
};

export { renderSpecificReactComponent as render, renderThroughRouter, fireEvent, act, screen, cleanup }
