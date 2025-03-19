
import './App.css';
import Header from './Components/Header';
import MainBanner from './Components/MainBanner';
import Services from './Components/Services';
import About from './Components/About';
import ContactUS from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <MainBanner />
        <About />
        <Services />
        <ContactUS />
        <Footer />
      
      </div>
      
    </div>
  );
}

export default App;
