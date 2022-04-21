

const Home = () => {
  return (
    <section className="Home">
      <h1>   <span>Hello.</span> I am John Adeniran</h1>
      <h6>Software Developer</h6>
    <p> 
    A self taught creative software developer with cloud computing experience
in developing client and server applications using cloud and web
technologies. I have developed rich and interactive websites and fast innovative web apps for businesses.
       </p>

        <article className="buttons">
          <button onClick={() => window.open("https://drive.google.com/file/d/1A90EdFR6waZvM91FDMFnVUT9ehc0Z2N4/view?usp=sharing", '_blank')} color="primary">Resume</button>
          <button href="/projects" color="primary">Projects</button>
          </article>
 


    </section>
  )
}

export default Home;