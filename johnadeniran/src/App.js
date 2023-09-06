import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Layout/Footer';
import Projects from './components/Pages/Projects';
import About from './components/Pages/About';
import Header from './components/Layout/Header'

import Home from './components/Pages/Home';

import './App.scss';
import Experience from './components/Pages/Experience';

function App() {
  return (
      <section className="App"> 
      <BrowserRouter>
      <Header/>
      
      <main>


        <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/projects" element={<Projects/>} /> 
          <Route exact path="/about" element={<About/>} /> 
          <Route exact path="/experience" element={<Experience/>} /> 
          </Routes>
          </main>

      </BrowserRouter>
      <Footer />
      </section>
  );
}

export default App;