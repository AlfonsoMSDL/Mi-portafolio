import React from 'react';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
      <Analytics/>
    </>
  );
}

export default App;
