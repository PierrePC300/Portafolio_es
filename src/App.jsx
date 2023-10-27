import "./App.css";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PhilosophyValues from "./components/PhilosophyValues";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div className="App font-['Sen']">
        <a className="bottom-0 animate-bounce p-6 translate-x-20 flex justify-right fixed pt-72" 
          href="#contact">
          <i className="text-green-600 text-6xl bx bxs-chat"></i>
        </a>

        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Work />
        <PhilosophyValues />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
