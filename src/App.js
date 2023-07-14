import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Portfolio from "./pages/projects/Portfolio";
import Contact from "./pages/contact/Contact";
import Technologies from "./pages/technologies/skills";


function App() {
  
  return (
    <>
      
      <Header />
      <Landing />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
      
    </>
  );
}

export default App;
