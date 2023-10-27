import Card from "../Layout/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <h3>About me</h3>

      <section className="flow">
        <Card>
          <h4>Top skills</h4>

            <ul>
              <li>
                <strong>Languages: </strong>Javascript, Typescript
              </li>
              <li>
                <strong>Framework: </strong> Nest, Next, Angular, React
              </li>
              <li>
                <strong>Databases: </strong> MongoDB, MySQL, PostGreSQL{" "}
              </li>

              <li>
                <strong>Cloud: </strong>Azure, AWS
              </li>
              <li>
                <strong>Tools: </strong>Git, Github, VSCode
              </li>
            </ul>
        
        </Card>

        <Card>
          <h4>Reach Out</h4>

          <h6>Socials</h6>
          <p>
            <Link
              target="_blank"
              to="https://www.twitter.com/balckjohncodes"
              aria-label="John Adeniran -Twitter"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </span>
              @jasolajohn
            </Link>{" "}
          </p>
          <p>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/adeniranjohn"
              aria-label="John Adeniran -LinkedIn"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </span>
              adeniranjohn
            </Link>
          </p>
          <p>
            <Link
              target="_blank"
              to="https://www.github.com/adeniranjohn"
              aria-label="John Adeniran -Github"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </span>
              adeniranjohn
            </Link>
          </p>

          <h6>Contacts</h6>
          <p>
            <Link
              to="mailto:jasolajohn@gmail.com"
              alt="Email"
              target="_blank"
              rel="noreferrer"
              aria-label="John Adeniran -Email"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              jasolajohn@gmail.com
            </Link>
          </p>
          <p>
            <Link
              to="tel: +2348031510308"
              alt="Phone"
              target="_blank"
              rel="noreferrer"
              aria-label="John Adeniran -Phone Call"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  className="feather feather-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              +2348131510308
            </Link>
          </p>
        </Card>

        {/* <Card>
          <h4>Ceritification</h4>
          <ul>
            <li>AWS Certified Cloud Practitioner</li>
            <li>MongoDB Associate Developer</li>
            <li>Azure Fundamentals</li>
            <li>Azure AI Fundamentals</li>
          </ul>
        </Card> */}

        {/* <Card>
          <h4>Education</h4>
          <ul>



            <li>
              <p>
              <span>   AltSchool Africa, Nigeria</span>
              <span>        — Diploma Backend Engineering </span>
              </p>
              <span>March 2022 - June 2023</span>
              </li>
              <li>
                <p>
                  <span>National Open University, Nigeria</span>
                  <span> — PGD,Information Technology</span>
                </p>
                <span>March 2014 - May 2015</span>
              </li>
              <li>
                <p>
                  <span>Federal Polytechnic Offa, Kwara, Nigeria </span>
                  <span>— HND,Computer Engineering</span>
                  </p>
                  <span> May 2006 - May 2007</span>
              </li>

          </ul>
        </Card> */}
      </section>
    </section>
  );
};

export default About;
