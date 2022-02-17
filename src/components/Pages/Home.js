import { Button, Typography, Box, ButtonGroup, Paper, Grid, Card} from '@material-ui/core'
import OpenInNew from '@material-ui/icons/OpenInNew'
const Home = () => {
  return (
    <article className="home">

      <Typography variant="h4" color="secondary" align="center">
      
      </Typography>
      <Typography variant="h2" align="center">
      <span color="secondary" >Hello</span> , I am John Adeniran
      </Typography>
      <Typography variant="h4" align="center">
        Software Developer
      </Typography>
      <Typography variant="p" align="center">
        <p>  I develop rich interactive websites and fast innovative web apps.    </p>
        <p>  I write REST APIs using NodeJS and NestJS, with  React library, Angular and NextJS front-end framework for front-end applications.    </p>
        <p> I build products with passion </p>
      </Typography>

        {/* <Grid container spacing={2}>
          <Grid item sm={12} md={6} >
        <Paper elevation={3} >
          <Card color="primary" style={{backgroundColor: '#3f51b5', color: 'white', padding: '2em', height: '15rem'}}>

          <Typography variant="h4">Skill sets</Typography>
          <ul>
          <li>
              <p><strong>Languages: </strong>Javascript, Typescript, Python</p>
            </li>
            <li>
              <p><strong>Framework: </strong>NodeJS, Nest, Next, Angular, React</p>
            </li>
            <li>
              <p><strong>Databases: </strong> MongoDB, MySQL, PostGreSQL</p>
            </li>

            <li>
              <p><strong>Cloud: </strong>Azure, AWS</p>
            </li>

          </ul>
          </Card>
        </Paper>
        </Grid>
        <Grid item sm={12} md={6}>

        <Paper elevation={3} >
<Card color="primary"  style={{backgroundColor: '#3f51b5', color: 'white', padding: '2em', height:'15rem'}} >
          <Typography variant="h4">Services</Typography>
          <ul>

            <li>
              <p>Web Design</p>
            </li>
            <li>
              <p>Web Development</p>
            </li>
            <li>
              <p>Rest API</p>
            </li>
            <li>
              <p>Databases</p>
            </li>
          
            <li>
              <p>Cloud App Development</p>
            </li>

          </ul>
          </Card>
        </Paper>
        </Grid>


      </Grid> */}
        <ButtonGroup variant="contained" align="center"  spacing={3} style={{marginTop: '3rem'}}>
          <Button onClick={() => window.open("https://drive.google.com/file/d/1A90EdFR6waZvM91FDMFnVUT9ehc0Z2N4/view?usp=sharing", '_blank')} color="primary"><OpenInNew />Resume</Button>
          <Button href="/projects" color="primary">Projects</Button>
        </ButtonGroup>

  


    </article>
  )
}

export default Home;