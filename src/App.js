import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header from './Components/UI/Header/Header';
import Layout from './views/Layout';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Components/Themes/UseDarkMode";
import { GlobalStyles } from "./Components/Themes/GlobalStyle";
import { lightTheme, darkTheme } from "./Components/Themes/Themes";
import Toggle from "./Components/Themes/Toggler";
import { ParallaxProvider } from 'react-scroll-parallax';
import { a, useTransition } from "@react-spring/web";
import { useProgress } from '@react-three/drei';


function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}


function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
    <Loader /> 
    <div className="load">
      <GlobalStyles />
      <ParallaxProvider>
      <Router>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Header />
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </Router>
      </ParallaxProvider>
    </div>
    </ThemeProvider>
  );
}

export default App;
