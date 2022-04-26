const About = () => {

  return (
    <section className="about">

      <h3>
        About me
      </h3>
      <section className="card">

        <h4>
          Top skills

        </h4>
        <p>
          <ul>
            <li>
              <strong>Languages: </strong>Javascript, Typescript, Python
            </li>
            <li>
              <strong>Framework: </strong>  Nest, Next, Angular, React
            </li>
            <li>
              <strong>Databases: </strong> MongoDB, MySQL, PostGreSQL </li>

            <li>
              <strong>Cloud: </strong>Azure, AWS
            </li>
            <li>
              <strong>Tools: </strong>Git, Github, VSCode         </li>
          </ul>
        </p>


      </section>

      <section className="card">
        <h4>
          Reach Out

        </h4>

        <h6>
          Socials

        </h6>
        <p><a href="https://twitter.com/jasolajohn" alt="Twitter" target="_blank" rel="noreferrer" aria-label="Twitter">
          Twitter icon: @jasolajohn</a></p>
        <p><a href="https://www.linkedin.com/in/adeniranjohn" alt="LinkedIn" target="_blank" rel="noreferrer"
          aria-label="LinkedIn">Linked icon: adeniranjohn</a></p>
        <p><a href="https://www.github.com/adeniranjohn" alt="Github" target="_blank" rel="noreferrer"
          aria-label="LinkedIn">Github icon: adeniranjohn</a></p>

        <h6>
          Contacts

        </h6>
        <p><a href="mailto:jasolajohn@gmail.com" alt="Email" target="_blank" rel="noreferrer" >Email: jasolajohn@gmail.com</a></p>
        <p><a href="tel: +2348031510308" alt="Phone" target="_blank" rel="noreferrer" >Phone icon: +2348131510308</a></p>

      </section>


    </section>
  )
}

export default About;