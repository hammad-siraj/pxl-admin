import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/index";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import theme from "../src/styles/theme";
import GlobalStyle from "../src/styles/global-style";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Suspense fallback={null}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <div className="app">
              <Switch>
                {ROUTES.map(({ path, component, ...rest }) => {
                  return (
                    <Route
                      component={component}
                      key={path}
                      path={path}
                      {...rest}
                    />
                  );
                })}
              </Switch>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
