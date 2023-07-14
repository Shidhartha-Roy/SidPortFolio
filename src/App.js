

import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Portfolio from "./pages/projects/Portfolio";

function App() {
  
  return (
    <>
      
      <Header />
      <Landing />
      
      <section id="abot">
      <About />
      </section>
      <section id="proj">
      <Portfolio />
      </section>
    </>
  );
}

export default App;
