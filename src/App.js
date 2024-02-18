import { Navbar, Intro, Services, Projects, About, Education, Contact, Footer, Certifications } from './Components/index';
import { useState } from "react";
import './App.css';
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Intro />
      <About darkmode={darkMode} />
      <Projects darkmode={darkMode} />
      <Services darkmode={darkMode} />
      <Education darkmode={darkMode} />
      <Certifications darkmode={darkMode} />
      <Contact darkmode={darkMode} />
      <Footer darkmode={darkMode} />

    </div>

  );
}

export default App;
