import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Hero from './components/Hero';



function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <About></About>
        <Mission></Mission>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
