import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Home />
        <Footer/>
      </>
    </Router>
  );
}

export default App;
