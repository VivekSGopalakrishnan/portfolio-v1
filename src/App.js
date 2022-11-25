import React from 'react';
import './App.css';
import Home from './Home/home';
import Navbar from './Navbar/navbar';
import About from './About/about';
import Skills from './Skills/skills';
import Timeline from './Timeline/timeline';
import Footer from './Footer/footer';
import styled,{ThemeProvider} from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './styles/globalStyles';
import { useDarkMode } from './styles/useDarkMode';
import Certifications from './Certifications/Certifications';
const Container = styled.div`
`;
function App() {
  const [ theme, toggleTheme ]=useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <>
   
    <ThemeProvider theme={themeMode}>
      <Container  >
      <GlobalStyle/>
      <Navbar  theme={theme} toggleTheme={toggleTheme}/>
      < Home theme={theme}/>
      < About />
      < Skills/>
      <Certifications/>
      < Timeline theme={theme}/> 
      < Footer />
      </Container>
    </ThemeProvider>
      </>
  );
}

export default App;
