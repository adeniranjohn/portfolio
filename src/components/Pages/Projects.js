import { Paper, Card, Typography } from '@material-ui/core'

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <Paper elevation={3} spacing={5}>
                <Card>
                    <Typography variant="h4" align="left">TrendyThrift <span>web url</span></Typography>
                    <Typography variant="p" align="left">Description</Typography>
                    <Typography variant="p" align="left">Tech Stack</Typography>
                    
                </Card>
            </Paper>

        </section>
    )
}

export default Projects;