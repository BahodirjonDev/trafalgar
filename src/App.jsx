import React from 'react';
import Article from './Project/Article';
import Footer from './Project/Footer';
import Header from './Project/Header';
import More from './Project/More';
import Navbar from './Project/Navbar';
import Services from './Project/Services';
import './Project/styles/style.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <More/>
      <Article/>
      <Footer/>
    </div>
  );
};

export default App;