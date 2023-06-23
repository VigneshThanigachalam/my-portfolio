import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectImage1 from "../assets/img/project-image1.JPG";
import projectImage2 from "../assets/img/project-image2.JPG";
import projectImage3 from "../assets/img/project-image3.JPG";
import projectImage4 from "../assets/img/project-image4.JPG";
import projectImage5 from "../assets/img/project-image5.JPG";
import projectImage6 from "../assets/img/project-image6.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Library Management",
      imgUrl: projectImage2,
      projectUrl: "https://library-management-task.netlify.app"
    },
    {
      title: "Dress color suggestion via Mail",
      imgUrl: projectImage5,
      projectUrl: "https://color-sugesstion-app.netlify.app"
    },
    {
      title: "Equipment Rental App",
      imgUrl: projectImage3,
      projectUrl: "https://erentalapp.netlify.app"
    }
  ];

  const projects2 = [
    {
      title: "Authentication App using Web Token",
      description: "Managing books in the library",
      imgUrl: projectImage6,
      projectUrl: "https://password-reset-authentication.netlify.app"
    },
    {
      title: "Teacher Management",
      imgUrl: projectImage1,
      projectUrl: "https://crudusingmockapi.netlify.app"
    },
    {
      title: "URL Shortner App",
      imgUrl: projectImage4,
      projectUrl: "https://urlshotener.netlify.app"
    }
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="mb-5">Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p><b className="text-light">Passport.js :</b> I have utilized Passport.js extensively in my MERN stack projects to implement flexible authentication strategies. It has allowed me to integrate various authentication methods, such as local authentication, OAuth, and OpenID, ensuring secure user authentication and authorization.</p>
                        <p><b className="text-light">JWT (JSON Web Tokens) :</b> I have leveraged JWT to enhance the security and integrity of data transmission between the client and server. By implementing JWT, I have facilitated stateless authentication, reduced server-side storage requirements, and ensured the authenticity of exchanged data.</p>
                        <p><b className="text-light">OAuth2 :</b> In my projects, I have successfully integrated OAuth2 to enable seamless third-party authentication. By leveraging OAuth2, users can easily log in or register using their existing accounts on platforms like Google, Facebook, and GitHub, providing a convenient and secure authentication experience.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
