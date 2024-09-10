import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
