import React from "react";
import {Col, Row} from 'react-bootstrap';
import{
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiMicrosoftteams,
    SiLinux,
    SiMacos,
} from 'react-icons/si';

function ToolStack(){
    return(
        <Row style={{justifyContent:'center', paddingBottom:'50px'}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMicrosoftteams/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos/>
            </Col>
        </Row>
    );
}

export default ToolStack;