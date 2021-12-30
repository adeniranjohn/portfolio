import { Paper, Card, Typography } from '@material-ui/core'

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <Paper elevation={3}>
                <Card>
                    <Typography variant="h4" align="left">TrendyThrift</Typography>
                    <Typography variant="p" align="left">Description of the Project</Typography>
                    <Typography variant="p" align="left">Project LIn</Typography>
                </Card>
            </Paper>

        </section>
    )
}

export default Projects;