
import { Grid, Typography } from '@material-ui/core'

const About = () => {
  
    return (
        <section>
  
  <Typography variant="h3" align="center">
     About us
  </Typography>
        <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={12} md={6}>
  
  <section>


 


  <Typography variant="h6">
   top 5 about me
  
  </Typography>
  <ol>

<li>A Self taught Software Developer</li>
<li>In love with Javascript & Typescript but presently learning Python</li>
<li>Full stack Developer</li>
<li>AWS & Azure is my top Cloud Platform</li>
<li>A mentor in Andela Learning Community</li>
</ol>
 
</section>

  </Grid>
        <Grid item xs={12} sm={12} md={6} >
        <h2>Reach out</h2>
  
            <h4>Socials</h4>
            <p><a href="https://twitter.com/jasolajohn" alt="Twitter" target="_blank" rel="noreferrer"  aria-label="Twitter">
              Twitter icon: @jasolajohn</a></p>
            <p><a href="https://www.linkedin.com/in/adeniranjohn" alt="LinkedIn" target="_blank" rel="noreferrer" 
                aria-label="LinkedIn">Linked icon: adeniranjohn</a></p>

            <h4>Contacts</h4>
            <p><a  href="mailto:jasolajohn@gmail.com"  alt="Email" target="_blank" rel="noreferrer" >Email: jasolajohn@gmail.com</a></p>
            <p><a href="tel: +2348031510308" alt="Phone" target="_blank" rel="noreferrer" >Phone icon: +2348131510308</a></p>

            </Grid>
            
            </Grid>
        
    </section>
    )
}

export default About;