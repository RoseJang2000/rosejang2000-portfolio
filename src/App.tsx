import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import AboutMe from '@pages/AboutMe';
import Home from '@pages/Home';
import Projects from '@pages/Projects';
import Skills from '@pages/Skills';
import { lightTheme, darkTheme } from '@/styles/Theme';
import Header from './containers/Header';
import Footer from './containers/Footer';

const App = () => {
  const defalutTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState<string>(
    defalutTheme ? defalutTheme : 'light',
  );

  return (
    <>
      <ThemeProvider
        theme={
          theme === 'light' ? { colors: lightTheme } : { colors: darkTheme }
        }
      >
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
