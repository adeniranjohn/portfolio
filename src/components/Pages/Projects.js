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
                <p>A Co-operative Thrift Web App designed to empower members by providing convenient access to their financial transactions, facilitating loan requests, and enabling automatic savings deductions directly from their salaries. This innovative platform simplifies financial management and fosters cooperative financial practices among its members.</p>
                <p><span className="secondary">Tech Stack: </span>Javascript, Express, Angular, Sass, AWS RDS(PostgreSQL), MongoDB</p>
                <p>Subscription: <span>Ikeja Thrift CS, Yaba cooperative</span></p>
            </Card>
            <Card>
            <h4>Ewe App</h4>
            <p>a social media application dedicated to the preservation of Yorùbá ecological data, knowledge, and collaborative information sharing. This platform serves as a digital hub for individuals passionate about safeguarding and sharing the rich ecological heritage and wisdom of the Yorùbá culture</p>
            <p><span className="secondary">Tech Stack: </span> NestJS, Typescript, MongoDB</p>

            </Card>
            </section>
        </section>
    )
}

export default Projects;