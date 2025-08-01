import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";

function App() {
  return (
    <>
      <Header />
      <Banner src="./banner-desktop.png" alt="banner" />
      <MovieSection />
    </>
  );
}

export default App;
