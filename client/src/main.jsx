import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Tab from './pages/Tab.jsx'
import Parks from './pages/Parks.jsx';
import Store from './pages/Store.jsx'
import About from './pages/About.jsx'
import NationalParks from './pages/NationalParks.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tab" element={<Tab />} />
      <Route path="/parkss" element={<Parks />} />
      <Route path="/parks" element={<NationalParks />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
)
