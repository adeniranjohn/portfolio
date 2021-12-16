import { Paper, Card } from '@material-ui/core'

const Projects = () => {
    return (
        <article>
            <h1>Projects</h1>
            <Paper elevation={3}>
                <Card>
                    <p>Tech Stack</p>
                    <p>Description of the Project</p>
                    <p>Link to project</p>
                </Card>
            </Paper>

        </article>
    )
}

export default Projects;