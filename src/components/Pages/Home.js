import { Button, Typography, ButtonGroup, Grid} from '@material-ui/core'

const Home = () => {
  return (
    <article className="home">
      <Grid container  xs={12} spacing={3}>
      <Grid item  align="center"  xs={12}>
     
      <Typography variant="h2" align="center">
         <Typography variant="span" color="secondary">
      Hello.
      </Typography>
      I am John Adeniran
      </Typography>
      </Grid>
    
      <Grid item xs={12}>
      <Typography variant="h6" align="center" >
        Software Developer
      </Typography>
      </Grid>
      <Grid item  align="center"  xs={12}>
      <Typography variant="p" align="center" >
       I develop rich interactive websites and fast innovative web apps for businesses.
        
      </Typography>
      </Grid>

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
            <Grid p={8}  item xs={12} justifyContent="center"  align="center" >
        <ButtonGroup variant="contained" align="center"  spacing={3}>
          <Button onClick={() => window.open("https://drive.google.com/file/d/1A90EdFR6waZvM91FDMFnVUT9ehc0Z2N4/view?usp=sharing", '_blank')} color="primary">Resume</Button>
          <Button href="/projects" color="primary">Projects</Button>
        </ButtonGroup>
        </Grid>
        </Grid>


    </article>
  )
}

export default Home;