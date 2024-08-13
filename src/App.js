import './App.css';
import AboutMe from './components/AboutMe/AboutMe.js';
import Landing from './components/Landing/Landing.js';
import Projects from './components/Projects/Projects.js';
import { Skills } from './components/Skills/Skills.js';



function App() {
  return (
    <div className="App">
        <Landing />
        <AboutMe />
        <Projects />
        <Skills />
    </div>
  );
}

export default App;
