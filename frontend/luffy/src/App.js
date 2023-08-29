import logo from './logo.svg';
import './App.css';
import About from './app/about/page';
import Header from './components/header';
import Booking from './app/booking/page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="*" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
