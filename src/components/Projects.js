import { Container, Col, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.svg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

  const projects = [
    {
      title: "Twitch Chat Webscraper",
      description: "Web Automation",
      imgUrl: projImg1,
      projectLink: "https://github.com/Asianadian/boxboxbot-trivia"
    },
  ]
  
  return  (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Are always a work in progress</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Personal</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Academic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Fun</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="proj-cards">
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project}/>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Coming soon...</Tab.Pane>
                <Tab.Pane eventKey="third">Coming soon...</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}