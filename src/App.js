import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App () {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className={theme === 'light' ? 'bg-light' : 'bg-dark'} data-bs-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home theme={theme} />
      <Projects theme={theme} />
      <About theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
