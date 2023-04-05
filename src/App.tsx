import AboutMe from '@pages/AboutMe';
import Home from '@pages/Home';
import Projects from '@pages/Projects';
import Skills from '@pages/Skills';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '@/styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default App;
