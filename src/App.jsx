import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Pricing from "./components/Pricing.jsx";
import Services from "./components/Services.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
