

import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Shidhartha Roy",
    location: "Guwahati, Assam, India",
    tagline: "Teacher and Developer",
    email: "sidroy192@gmail.com",
    availability: "Open for work",
    brand:
      "My combined technical expertise in developing software and debugging combined with my experience as a tutor teaching children of many ages and standards gives me an unique advantage of understanding what the clients want and helps me to explain to them the hardest of technical problems with ease."
  }
  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
