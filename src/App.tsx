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
        src="./banner-desktop.png"
        alt="banner"
        text1="Onde a realidade "
        text2="encontra a fantasia!"
      />
      <MovieSection />
      <Banner
        src="./combo.png"
        alt="Combo"
        variant="combo"
        text1="Combo "
        text2="Dragon's Ascent"
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
