import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Layout/Footer';
import Experience from './components/Pages/Experience';
import About from './components/Pages/About';
import Header from './components/Layout/Header'

import Home from './components/Pages/Home';

import './App.scss';

function App() {
  return (
      <section className="App"> 
      <BrowserRouter>
      <Header/>
      
      <main>


        <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/experience" element={<Experience/>} /> 
          <Route exact path="/about" element={<About/>} /> 
          </Routes>
          </main>

      </BrowserRouter>
      <Footer />
      </section>
  );
}

export default App;
