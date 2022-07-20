import React from 'react';
import './App.scss'
import { About } from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import NavBar from './components/navbar/NavBar';
import { Project } from './components/projects/Project';
import { I18nProvider } from './internalization/Index';
import translate from './internalization/Translate';
import { LOCALES } from './internalization/Locale';
import { LocaleProvider } from './components/apiContext/ApiContext';
function App() {
  
  return (
  <LocaleProvider>
  <div className="App">
        <NavBar />
        <Intro />
        <About />
        <Project />
        <Contact />
         <Footer />
   </div>
   </LocaleProvider> 

  );
}

export default App;
