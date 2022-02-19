
import { Typography } from '@material-ui/core'
import Card from '../Layout/Card';

const About = () => {

  return (
    <section>

      <Typography variant="h3" align="center">
        little about me...
      </Typography>
      <Card>

        <Typography variant="h5">
          top skills

        </Typography>
        <Typography>
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
        </Typography>


      </Card>

      <Card>
        <Typography variant="h5">
          Reach Out

        </Typography>

        <Typography variant="h6">
          Socials

        </Typography>
        <p><a href="https://twitter.com/jasolajohn" alt="Twitter" target="_blank" rel="noreferrer" aria-label="Twitter">
          Twitter icon: @jasolajohn</a></p>
        <p><a href="https://www.linkedin.com/in/adeniranjohn" alt="LinkedIn" target="_blank" rel="noreferrer"
          aria-label="LinkedIn">Linked icon: adeniranjohn</a></p>
        <p><a href="https://www.github.com/adeniranjohn" alt="Github" target="_blank" rel="noreferrer"
          aria-label="LinkedIn">Github icon: adeniranjohn</a></p>

        <Typography variant="h6">
          Contacts

        </Typography>
        <p><a href="mailto:jasolajohn@gmail.com" alt="Email" target="_blank" rel="noreferrer" >Email: jasolajohn@gmail.com</a></p>
        <p><a href="tel: +2348031510308" alt="Phone" target="_blank" rel="noreferrer" >Phone icon: +2348131510308</a></p>

      </Card>


    </section>
  )
}

export default About;