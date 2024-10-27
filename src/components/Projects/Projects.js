import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TempImg from "../../Assets/Projects/temp.png";

function Projects(){
    return(
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color:"white"}}>
                    Here are a few Projects I've worked on recently.
                </p>
                <Row style={{ justifyContent:'center', paddingBottom:'10px'}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={TempImg}
                            title="App"
                            description="Personal Work"
                            ghLink="GithubLink"
                            demoLink="Demo Link"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects