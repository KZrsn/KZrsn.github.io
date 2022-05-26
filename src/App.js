import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import './styles/style.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div className = "App">
      <Nav />
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '*' element = {<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
