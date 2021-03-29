import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { SideNav, Summary } from './resumeComponents'
import '../css/resumeStyles.css';

function Resume(props) {

    return (
        <Row>
            <Col xs="12" sm="3" md="2" xl="1">
                <SideNav />
            </Col>
            <Col xs="12" sm="auto" >
                <Summary />
            </Col>
        </Row>
    )
}

export default Resume;