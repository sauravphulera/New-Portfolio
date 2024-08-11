import './App.css';
import AboutMe from './components/AboutMe/AboutMe.js';
import Landing from './components/Landing/Landing.js';
import Projects from './components/Projects/Projects.js';



function App() {
  return (
    <div className="App">
        <Landing />
        <AboutMe />
        <Projects />
    </div>
  );
}

export default App;
