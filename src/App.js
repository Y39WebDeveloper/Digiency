import './App.css';
import { ScrollTop } from './components';
import { Hero, Services, AboutUs, OurProject, Testimonial, Newsletter, Capabilities, Blog, Footer } from './sections';

function App() {
  return (
    <>
      <Hero/>
      <Services/>
      <AboutUs/>
      <OurProject/>
      <Testimonial/>
      <Capabilities/>
      <Blog/>
      <Newsletter/>
      <Footer/>
      <ScrollTop/>
    </>
  );
}

export default App;