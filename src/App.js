import { Container, AppBar, Toolbar, Box } from '@material-ui/core';
import { BrowserRouter,Link, Routes, Route } from 'react-router-dom'
import Footer from './components/Layout/Footer';
import Experience from './components/Pages/Experience';
import About from './components/Pages/About';

import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';

import './App.scss';

function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
      <header>
       <AppBar position="fixed" >
   
      <section>
      <Link to="/"> <img src="avatar.jpeg" alt="John Adeniran Avatar" width="50"/> </Link>
       <nav>
       <Toolbar>
         {/* <IconButton><MenuIcon/></IconButton> */}
         <Link to="/"> Home </Link>
            {/* <Link to="/projects"> Projects</Link> */}
            <Link to="/experience"> Experience</Link>
            <Link to="/about">About</Link>

            </Toolbar>
        </nav>
        </section>
       </AppBar>
      </header>
      <main>
      <Container maxWidth="lg">
    <Box p={3}>
        <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/projects" element={<Projects/>} /> 
          <Route exact path="/experience" element={<Experience/>} /> 
          <Route exact path="/about" element={<About/>} /> 
          </Routes>
          </Box>
          </Container>
          </main>
    
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
