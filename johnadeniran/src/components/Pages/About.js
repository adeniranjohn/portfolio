import Card from '../Layout/Card';

const About = () => {

  return (
    <section className="about">

      <h3>
        About me
      </h3>
      <Card>

        <h4>
          Top skills

        </h4>
        <p>
          <ul>
            <li>
              <strong>Languages: </strong>Javascript, Typescript
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
              <strong>Tools: </strong>Git, Github, VSCode</li>
          </ul>
        </p>


      </Card>

      <Card>
        <h4>
          Reach Out

        </h4>

        <h6>
          Socials

        </h6>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg><a href="https://twitter.com/adeniran_jo" alt="Twitter" target="_blank" rel="noreferrer" aria-label="Twitter">
          Twitter: @jasolajohn</a></p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><a href="https://www.linkedin.com/in/adeniranjohn" alt="LinkedIn" target="_blank" rel="noreferrer"
          aria-label="LinkedIn">LinkedIn: adeniranjohn</a></p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg><a href="https://www.github.com/adeniranjohn" alt="Github" target="_blank" rel="noreferrer"
          aria-label="LinkedIn">Github: adeniranjohn</a></p>

        <h6>
          Contacts

        </h6>
        <p><a href="mailto:jasolajohn@gmail.com" alt="Email" target="_blank" rel="noreferrer" >Email: jasolajohn@gmail.com</a></p>
        <p><a href="tel: +2348031510308" alt="Phone" target="_blank" rel="noreferrer" >Phone icon: +2348131510308</a></p>

      </Card>


    </section>
  )
}

export default About;