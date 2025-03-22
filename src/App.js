import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Firstbox from './components/Firstbox';
import Secondbox from './components/Secondbox';
import Third from './components/Thirdbox';
import Fourth from './components/Fourth';
import ParallaxSlider from './components/ParallaxSlider';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ParallaxSlider />
     <Firstbox />
     <Secondbox />
     <Third />
     <Fourth />
    </div>
  );
}

export default App;
