import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';
import Timeline from './components/Timeline';

function App() {

  return (
    <div className="App">
      <Intro />
      {/* <Portfolio /> */}
      <Bio />
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
