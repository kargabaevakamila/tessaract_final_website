import './App.css';
import Home from "./Components/home";
import About from './Components/About';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;