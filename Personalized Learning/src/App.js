import React from "react";
import Routes from "router/Router";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Helmet } from "react-helmet";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#a7ffeb",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#a7ffeb",
      main: "#004d40",
      dark: "#00695c",
      contrastText: "#e0f2f1",
    },
  },
});

const TITLE = "Personalized Learning";

const App = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <title>{TITLE}</title>
    </Helmet>
    <Routes />
  </ThemeProvider>
);

export default App;
