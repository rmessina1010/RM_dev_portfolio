import React, { Component } from 'react';
import { Sidenav, Summary, Tools, Skills, Experience, Awards, Languages, Education, Certs, References } from './resumeComponents'

function Resume(props) {

    return (
        <Row>
            <Col xs="12" sm="3" md="2" xl="1">
                <SideNav />
            </Col>
            <Col xs="12" sm="auto" >
                <Summary />
                <Tools />
                <Skills />
                <Experience />
                <Awards />
                <Languages />
                <Education />
                <Certs />
                <References />
            </Col>
        </Row>
    )
}