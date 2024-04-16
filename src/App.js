import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Nav/Navbar';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Skill from './Components/Skills/Skill';
import Project from './Components/Project/Project';
function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <Navbar />
        <Home/>
        <Service/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
