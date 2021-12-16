import { Container, AppBar, Toolbar, Menu } from '@material-ui/core';
import { BrowserRouter,Link, Routes, Route } from 'react-router-dom'
import Footer from './components/Layout/Footer';


import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';
import './App.css';

function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
      <header>
       <AppBar position="fixed">
      <section>
      <Link to="/"> <img src="avatar.jpeg" alt="John Adeniran Avatar" width="50"/> </Link>
       <nav>
  
            <Link to="/projects"> Projects</Link>
            <Link to="/about">About </Link>
            <Link to="/contact"> Contact</Link>
   
        </nav>
        </section>
       </AppBar>
      </header>
      <main>


        <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/projects" element={<Projects/>} /> 

          </Routes>
          </main>

      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
