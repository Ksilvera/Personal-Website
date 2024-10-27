import React from "react";
import Card from 'react-bootstrap/Card';
import {ImPointRight} from 'react-icons/im';

function AboutCard(){
    return(
        <Card className='quote-card-view'>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign:'justify'}}>
                        Welcome Everyone, I am <span className="purple">Kevin Silvera </span>
                        from <span className="purple">Alexandria, Virginia</span>
                        <br/>
                        I am currently looking for a software engineering position.
                        <br/>
                        I was previously employed at Comcast.
                        <br/>
                        I have completed my Bachelors of Science in Computer Science at
                        George Mason University.
                        <br/>
                        <br/>
                        Aside from coding, I love to:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Play Video Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Travel
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Play Guitar
                        </li>
                    </ul>

                    <p style={{color: 'rgb(155 126 172)'}}>
                        "Always work smarter, not Harder"{" "}
                    </p>
                    <footer className="blockquote-footer">Kevin</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;