import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Firstbox from './components/Firstbox';
import Secondbox from './components/Secondbox';
import Third from './components/Thirdbox';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Firstbox />
     <Secondbox />
     <Third />
    </div>
  );
}

export default App;
