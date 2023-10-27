import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="Home">
      <h1>   
      <span class="hello">Hello.</span> 
      <span class="name">I'm John Adeniran</span></h1>
      <h2>Software Developer</h2>
    <blockquote>I develop websites and web applications for businesses and organisations on cloud</blockquote>

        <span className="buttons">
          <Link to="/" onClick={() => window.open("", '_blank')} className='resume' >Resume</Link>
          <Link to="/projects">Projects</Link>
          </span>
 


    </section>
  )
}

export default Home;