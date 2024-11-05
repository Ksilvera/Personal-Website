import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MovieImg from "../../Assets/Projects/movie.png"
import MusicImg from "../../Assets/Projects/Music-bot.webp"
import MemeImg from "../../Assets/Projects/Success-Kid.jpg"
import WarImg from "../../Assets/Projects/war.png"

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
                            imgPath={MovieImg}
                            title="Movie DataBase App"
                            description="Allows users to enter a title in the search bar and will return results below the search bar. Users can then click the title and view the movie description and rating."
                            ghLink="https://github.com/Ksilvera/Movie-Database-App"
                            demoLink="https://movie-database-app-ks.vercel.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={MusicImg}
                            title="Discord Music Bot"
                            description="A Discord bot created for my discord server to be able to play music, add to playlist, stop playing, join voice channels. Coded using Discord python API."
                            ghLink="https://github.com/Ksilvera/Discord-Music-Bot"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={MemeImg}
                            title="TheMemeBase"
                            description="A website used to generate memes created by the user with custom texts and displays those new memes on the front page of the webpage. Allows signin/register to register an account using an email and password. Data is then saved to Firebase which allows users to save their memes in firebase. Coded with REACT and Firebase as the database."
                            ghLink="https://github.com/Ksilvera/TheMemeBase"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={WarImg}
                            title="War Card Game"
                            description="A War Game where two players face off on who has the higher card. Ace being the highest"
                            ghLink="https://github.com/Ksilvera/WarCardGame"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects