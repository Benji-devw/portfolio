import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/UI/Header/Header';
import Layout from './views/Layout';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Components/Themes/UseDarkMode";
import { GlobalStyles } from "./Components/Themes/GlobalStyle";
import { lightTheme, darkTheme } from "./Components/Themes/Themes";
import Toggle from "./Components/Themes/Toggler";


function App() {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles />

      <Router>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        <Header />

        <Switch>
          <Route path="/" exact={true} component={Layout} />
        </Switch>
      </Router>

    </>
    </ThemeProvider>
  );
}

export default App;
