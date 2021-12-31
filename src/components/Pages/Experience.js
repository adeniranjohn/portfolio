import { Paper, Card, Typography, Box } from '@material-ui/core'

const Experience = () => {
    return (
        <section className="projects">
            <Typography variant="h3" align="center">
                Experience
            </Typography>
 <Paper style={{padding: '1em', marginBottom: '0.5em'}}>
       
                    <Typography variant="h4" align="left">WAEC IKEJA CT & CS</Typography>
                    <Typography variant="p" align="left">Software Developer</Typography>
                    <Typography variant="p" align="left">
                        <ul>
                            <li> Lead role in designing the product/features for customer needs.</li>
                            <li>Write well designed, testable, efficient code by using best software development practices.</li>
                            <li>Identifying areas for modifications in existing programs and subsequently developing these modifications</li>
                            <li>Create website Layout/User Interface by using standard HTML and CSS practices for best User Experience.</li>
                            <li>Stay plugged into emerging technologies/industry trends and apply them into operations and activities.</li>
                            <li>Integrate data from various backend services and databases.</li>
                            <li>Design, write and maintain project codebase on Github and database on AWS RDS.</li>
                        </ul>
                    </Typography>
                    <Typography variant="p" align="left">Tech stack: Amazon Web Services (RDS), Heroku, Firebase, PostgreSQL, Angular, NodeJS, Express and Git</Typography>
        
         </Paper>

            <Paper style={{padding: '1em', marginBottom: '0.5em'}}>
     
                    <Typography variant="h4" align="left">TrendyThrift</Typography>
                    <Typography variant="p" align="left">Web Developer</Typography>
                    <Typography variant="p" align="left">
                        <ul>
                            <li>Integration of back-end APIs to the user interface.</li>
                            <li>Gather and refine specifications and requirements based on technical needs.</li>
                            <li>Development, review and deployment of features that satisfy member and consumer needs.</li>
                            <li>Work with other teams members to plan, design and develop solutions that meet the products need.</li>
                        </ul>
                    </Typography>
                    <Typography variant="p" align="left">Tech stack: Firebase, Angular, NodeJS, Express and Git</Typography>

            </Paper>
            <Paper  style={{padding: '1em', marginBottom: '0.5em'}}>
                <Typography variant="h4" align="left">Volunteering </Typography>
                <Box style={{padding: '1em', marginBottom: '0.5em'}}>
                    <Typography variant="h5" align="left">ALC x Microsoft 4Afrika Skillslab (Mentor)  </Typography>
                    <Typography variant="p" align="left">February 2021 - October 2021</Typography>
                    <Typography variant="p" align="left">
                        <ul>
                        <li>I volunteered as a Training mentor to upskill Fresh Graduates and Undergraduates through digital and auxiliary skills training program from the Microsoft Learn Program Cycle</li>
                        </ul>
                    </Typography>
                    <Typography variant="p" align="left">Knowledge Base: Azure Cloud Computing</Typography>
                </Box>
             
                <Box style={{padding: '1em', marginBottom: '0.5em'}}>
                    <Typography variant="h5">BuildForSDG Challenge Learning Community Ambassador</Typography>
                    <Typography variant="p" align="left">May 2019 - December 2019</Typography>
                    <Typography variant="p" align="left">
                        <ul>
                            <li>Monitoring their progress to make sure their learning path is smooth.</li>
                            <li>Assisting in technicalities of their courses.</li>
                            <li>Encouraging total participation and completion of the program.</li>
                        </ul>
                    </Typography>
                    <Typography variant="p" align="left">Knowledge Base: Javascript & React Framework</Typography>
        
            </Box>
            </Paper>
        </section>
    )
}

export default Experience;