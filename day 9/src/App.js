import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import StockWatch from './pages/StockWatch';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Privacy from './Components/Privacy';
import TermsAndConditions from './Components/TermsAndConditions';
import FAQPage from './Components/FAQPage';
import Adminlogin from './pages/adminlogin';
import Smart from './pages/Smart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<StockWatch />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/conditons" element={<TermsAndConditions />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/smart" element={<Smart  />} />
          <Route path="/admin" element={<Adminlogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
