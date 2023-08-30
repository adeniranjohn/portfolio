import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="Home">
      <h1>   <span>Hello.</span> I'm John Adeniran</h1>
      <h6>Software Developer</h6>
    <p>I develop websites and web applications for businesses and organisations on cloud</p>

        <article className="buttons">
          <Link to="/" onClick={() => window.open("https://drive.google.com/file/d/1A90EdFR6waZvM91FDMFnVUT9ehc0Z2N4/view?usp=sharing", '_blank')} >Resume</Link>
          <Link to="/projects">Projects</Link>
          </article>
 


    </section>
  )
}

export default Home;