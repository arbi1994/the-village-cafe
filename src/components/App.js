import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';
// hooks 
import ScrollRestoration from '../hooks/useScrollRestoration';
// components
import Header from './Header';
import Home from './home/Home';
import About from './about/About';
import Menus from './menus/Menus';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';
import FooterTop from './FooterTop';
import Footer from './Footer';
import ScrollToTopBtn from './ScrollToTopBtn';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <Header />
        <ScrollRestoration />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <FooterTop />
      <Footer />
      <ScrollToTopBtn />
    </Router>
  )
}

export default App;
