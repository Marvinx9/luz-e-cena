import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <MovieSection />
      <Banner variant="combo" />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
