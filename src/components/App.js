import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from 'react-router-dom';
// components
import Header from './Header';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Menus from './menus/Menus';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';
import Parallax from './Parallax';
import Footer from './Footer';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Parallax />
      <Footer />
    </Router>
  )
}

export default App;
