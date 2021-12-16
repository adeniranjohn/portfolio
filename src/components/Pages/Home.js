import { Button } from '@material-ui/core'

const Home = () => {
    return (
        <article>
            <h1>Home page</h1>
            <article className="project">
        <section>Project 1</section>
        <section>Project 2</section>
        <section>Project 3</section>
        <section>
          <p>Name of Project</p>
          <p>Description of Project</p>
          <p>Tech stack of Project</p>
          <p>Image of Project</p>
          <p>Url of Project</p>
        </section>
      </article>
      <article className="contact">

        <section>Contact</section>
        </article>
        <article className="about">

        </article>
        <Button variant="contained" color="primary">Hello World</Button>

        <article></article>
        </article>
    )
}

export default Home;