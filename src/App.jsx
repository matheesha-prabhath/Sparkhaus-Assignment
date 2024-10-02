import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Services />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
