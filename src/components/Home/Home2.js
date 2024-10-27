import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from '../../Assets/me.png';
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub
} from "react-icons/ai";
import{
    FaLinkedinIn
} from "react-icons/fa";

function Home2(){
    return(
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: '2.6em'}}>
                            Let Me <span className="purple"> Introduce </span> Myself!
                        </h1>
                        <p className="home-about-body">
                            I enjoy problem-solving and creating applications
                            <br/>
                            <br/> I am proficient in:
                            <i>
                                <b className="purple"> Java, Python, Javascript.</b>
                            </i>
                            <br/>
                            <br/>
                            My field of Interests are building new &nbsp;
                            <i>
                                <b className="purple">Web Applications and Services</b> in areas
                                related to{" "}
                                <b className="purple">
                                    AI, APIs, and whatever peeks my interest.
                                </b>
                            </i>
                            <br/>
                            <br/>
                            When possible, I also love developing web products
                            with <b className="purple">Node.js</b> using
                            <i>
                                <b className="purple">
                                    {" "}
                                    modern Javascript Frameworks.
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js, Next.js, and Material-UI</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvatar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Ksilvera"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-color home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/kevinsilvera/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-color home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;