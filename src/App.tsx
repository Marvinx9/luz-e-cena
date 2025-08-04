import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner
        src_desktop="./banner-desktop.png"
        src_mobile="./banner-mobile.png"
        alt="banner"
      />
      <MovieSection />
      <Banner
        src_desktop="./combo-desktop.png"
        src_mobile="./combo-mobile.png"
        alt="Combo"
        variant="combo"
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
