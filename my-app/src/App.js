
import './App.css';
import Header from './Components/Header';
import MainBanner from './Components/MainBanner';
import Services from './Components/Services';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <MainBanner />
        <About />
        <Services />
      
      </div>
      
    </div>
  );
}

export default App;
