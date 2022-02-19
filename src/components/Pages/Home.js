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