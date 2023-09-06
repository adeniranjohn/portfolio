import Card from '../Layout/Card';
import '../../styles/Project.scss'

const Projects = () => {
    return (
        <section className="projects">
            <h3>
                Projects
            </h3>
            <section className="flow">
            <Card>
                <h4>John Adeniran's Portfolio</h4>
                <h6>Role: Front End Developer</h6>
                <ul>
                    <li>Well-structured, clean, and maintainable code using modern frontend technologies (HTML5, CSS3, JavaScript using Reactjs framework).</li>
                </ul>
                <p><span className="secondary">Tech stack:</span> React, JavaScript, SCSS</p>

            </Card>


            <Card>

                <h4>WAEC Ikeja CT & CS </h4>
                <h6>Role: Full stack Developer</h6>
                <ul>
                    <li> Lead role in designing the product/features for customer needs.</li>
                    <li>Create Layout/User Interface by using standard HTML and CSS practices for best User Experience.</li>
                    <li>Integrate data from various backend services and databases.</li>
                    <li>Maintain project codebase on Github and database on AWS RDS.</li>

                </ul>

                <p>   <span className='secondary'>Tech stack: </span>Amazon Web Services (RDS), Heroku, Firebase, PostgreSQL, Angular, NodeJS, Express and Git</p>
            </Card>

            <Card>

                <h4>TrendyThrift</h4>
                <h6>Role: Web Developer</h6>

                <ul>
                    <li>Integration of back-end APIs to the user interface.</li>
                    <li>Gather and refine specifications and requirements based on technical needs.</li>
                    <li>Development, review and deployment of features that satisfy member and consumer needs.</li>
                    <li>Work with other teams members to plan, design and develop solutions that meet the products need.</li>
                </ul>

                <p> <span className="secondary">Tech stack: </span>Firebase, Angular, NodeJS, Express and Git</p>

            </Card>
            <Card>
                <h4>Volunteering </h4>
                <article>
                    <h6>ALC x Microsoft 4Afrika Skillslab (Mentor)  </h6>
                    <p>February 2021 - October 2021</p>

                    <ul>
                        <li>I volunteered as a Training mentor to upskill Fresh Graduates and Undergraduates through digital and auxiliary skills training program from the Microsoft Learn Program Cycle</li>
                    </ul>

                    <p> <span className="secondary">Knowledge base: </span> Azure Cloud Computing</p>
                </article>

                <article>
                    <h6>BuildForSDG Challenge Learning Community Ambassador</h6>
                    <p>May 2019 - December 2019</p>

                    <ul>
                        <li>Monitoring learners progress to make sure their learning path is smooth.</li>
                        <li>Assisting in technicalities on their courses.</li>
                        <li>Encouraging total participation and completion of the program.</li>
                    </ul>

                    <p><span className="secondary">Knowledge base: </span> Javascript & React Framework</p>

                </article>
            </Card>

            <Card>
                <h4>Thrifta</h4>
                <p>A Co-operative Thrift Society Software Application</p>
                <p><span className="secondary">Tech Stack: </span>Javascript, Express, Angular, Sass, AWS RDS(PostgreSQL), MongoDB</p>
            </Card>
            <Card>
            <h4>Ewe App</h4>
            <p> A Social Media Application for knowledge of plants & herbs </p>
            <p><span className="secondary">Tech Stack: </span> NestJS, Typescript, MongoDB</p>

            </Card>
            </section>
        </section>
    )
}

export default Projects;