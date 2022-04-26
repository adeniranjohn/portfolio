const Projects = () => {
    return (
        <section className="projects">
            <h3>
                Projects
            </h3>



            <section className="card">

                <h4>WAEC Ikeja CT & CS</h4>
                <h6>Software Developer</h6>
                <ul>
                    <li> Lead role in designing the product/features for customer needs.</li>
                    <li>Create Layout/User Interface by using standard HTML and CSS practices for best User Experience.</li>
                    <li>Integrate data from various backend services and databases.</li>
                    <li>Maintain project codebase on Github and database on AWS RDS.</li>
                </ul>

                <span>   <span className='secondary'>Tech stack: </span>Amazon Web Services (RDS), Heroku, Firebase, PostgreSQL, Angular, NodeJS, Express and Git</span>
            </section>

            <section className="card">

                <h4>TrendyThrift</h4>
                <h6>Web Developer</h6>

                <ul>
                    <li>Integration of back-end APIs to the user interface.</li>
                    <li>Gather and refine specifications and requirements based on technical needs.</li>
                    <li>Development, review and deployment of features that satisfy member and consumer needs.</li>
                    <li>Work with other teams members to plan, design and develop solutions that meet the products need.</li>
                </ul>

                <span> <span className="secondary">Tech stack: </span>Firebase, Angular, NodeJS, Express and Git</span>

            </section>
            <section className="card">
                <h4>Volunteering </h4>
                <article>
                    <h6>ALC x Microsoft 4Afrika Skillslab (Mentor)  </h6>
                    <p>February 2021 - October 2021</p>

                    <ul>
                        <li>I volunteered as a Training mentor to upskill Fresh Graduates and Undergraduates through digital and auxiliary skills training program from the Microsoft Learn Program Cycle</li>
                    </ul>

                    <span> <span className="secondary">Knowledge base: </span> Azure Cloud Computing</span>
                </article>

                <article>
                    <h6>BuildForSDG Challenge Learning Community Ambassador</h6>
                    <p>May 2019 - December 2019</p>

                    <ul>
                        <li>Monitoring learners progress to make sure their learning path is smooth.</li>
                        <li>Assisting in technicalities on their courses.</li>
                        <li>Encouraging total participation and completion of the program.</li>
                    </ul>

                    <span><span className="secondary">Knowledge base: </span> Javascript & React Framework</span>

                </article>
            </section>
        </section>
    )
}

export default Projects;