
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Directory from './pages/Directory';
import StallDetails from './pages/StallDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/stall/:id" element={<StallDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
