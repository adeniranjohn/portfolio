import { Paper, Card, Typography } from '@material-ui/core'

const Experience = () => {
    return (
        <section className="projects">
            <h2>Experience</h2>
            <Paper elevation={3}>
                <Card>
                    <Typography variant="h4" align="left">title</Typography>
                    <Typography variant="p" align="left">roles</Typography>
                    <Typography variant="p" align="left">tech stack</Typography>
                </Card>
            </Paper>

        </section>
    )
}

export default Experience;