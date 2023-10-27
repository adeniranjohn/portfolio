import React from 'react';
import Card from './../Layout/Card';

const Experience = () => {

return (
    <section className="experience">
        <h3>Experience</h3>

        <Card>
            <h4>ANDELA LEARNING COMMUNITY</h4>
            <h6>Technical Team Lead</h6>
            <span>APRIL 2022 - JUNE 2023</span>
            <h6>PROJECT - Mentor Management System</h6>
            <p><span className="secondary">Tech stack:</span> REST API, MongoDB, Heroku, FireBase, React, Nestjs</p>
            <h6>PROJECT - Conversational E-learning App</h6>
            <p><span className="secondary">Tech stack:</span> REST API, MongoDB, Heroku, FireBase, React, Git and
GitHub</p>
            <ul>
                <li>Work collaboratively with fellow software developers to build high-quality solutions.</li>
                <li>Participate in peer reviews to provide valuable feedback on solution designs and code.</li>
                <li>Utilize various technologies such as REST API, MongoDB, Heroku, FireBase, React, Git, and GitHub to build innovative solutions</li>
            </ul>
        
        </Card>

        <Card>
            <h4>Thrifta</h4>
            <h6>Fullstack Software Developer</h6>
            <span>JANUARY, 2018 - MAY, 2023</span>
            <ul>
                <li>Integrate data from various backend services and databases to
create cohesive and functional solutions.</li>
<li>
Develop, write, and maintain project codebase on GitHub for
backend services, and database on AWS RDS for efficient and
effective project management.
</li>
<li>
RESTful API design and implementation
</li>
            </ul>
            <p><span className="secondary">Tech stack:</span> REST API, MongoDB, Heroku, FireBase, Angular, Git
and GitHub</p>

        </Card>


    </section>
)



}

export default Experience;