import { Button, Typography, Box, ButtonGroup } from '@material-ui/core'
import OpenInNew  from '@material-ui/icons/OpenInNew'
const Home = () => {
  return (
    <article className="home">

      <Typography variant="h4" color="secondary" align="center">
        Hello.
      </Typography>
      <Typography variant="h2" align="center">
        I'm John Adeniran
      </Typography>
      <Typography variant="h4" align="center">
        Software Developer
      </Typography>
      <Typography variant="p" align="center">


          <p>  I develop rich interactive websites and fast innovative web apps.    </p>
          <p>  I write REST APIs using NodeJS and NestJS, with  React library, Angular and NextJS front-end framework for front-end applications.    </p>
          <p> I build products with passion </p>


        </Typography>
        <Typography variant="p">
        <h2>Skill sets </h2>
        <ul>

          <li>
            <p><strong>Framework: </strong>NodeJS | Express | Nest | Next | Angular | React</p>
          </li>
          <li>
            <p><strong>Databases: </strong>Microsoft SQL Sever | MongoDB | MySQL | PostGreSQL</p>
          </li>

          <li>
            <p><strong>Cloud: </strong>Azure | AWS</p>
          </li>

        </ul>

      </Typography>
      <Box>
        <ButtonGroup variant="contained" align="center" >
          <Button  onClick={() => window.open("https://drive.google.com/file/d/1A90EdFR6waZvM91FDMFnVUT9ehc0Z2N4/view?usp=sharing", '_blank')} color="primary"><OpenInNew/>Resume</Button>
          <Button href="/projects" color="primary">Projects</Button>
        </ButtonGroup>

      </Box>


    </article>
  )
}

export default Home;