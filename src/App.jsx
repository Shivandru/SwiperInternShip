import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Sections/Navbar";
import FirstSection from "./Sections/FirstSection";
import Swiper from "./Sections/Swiper";
import SecondSection from "./Sections/SecondSection";
import Faq from "./Sections/Faq";
import Subscribe from "./Sections/Subscribe";
import Footer from "./Sections/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Swiper />
      <FirstSection />
      <SecondSection />
      <Faq />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
