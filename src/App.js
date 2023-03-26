import NavbarComp from "./components/NavbarComp";
import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";
import GalleryComp from "./components/GalleryComp";
import HeroComp from "./components/HeroComp";
import ServicesComp from "./components/ServicesComp";

function App() {
  return (
    <div>
      <NavbarComp />
      {/* content */}

      <HeroComp />
      {/* content */}

      <GalleryComp />
      {/* content */}

      <ServicesComp />
      {/* content */}

      <FaqComp />
      {/* content */}

      <FooterComp />
      {/* content */}
    </div>
  );
}

export default App;
