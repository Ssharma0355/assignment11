import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Firstbox from './components/Firstbox';
import Secondbox from './components/Secondbox';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Firstbox />
     <Secondbox />
    </div>
  );
}

export default App;
