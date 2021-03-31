import React from 'react';
import { Row, Col, NavItem, NavLink } from 'reactstrap';
import { ResNav, Summary, Skills, WorkHist, Projects, Awards, Education } from './resumeComponents';
import resData from '../shared/resumeData';
import '../css/resumeStyles.css';

resData.experience.sort((a, b) => a.endDate < b.endDate);

function Resume() {
    let resumeSections = [];

    let navItems = Array.isArray(resData.sections) ? resData.sections.map(
        section => {
            let oldLen = resumeSections.length;
            switch (section.type) {
                case 'summ':
                    if (resData.summary) {
                        resumeSections.push(
                            <Summary secTitle={section.title} id={section.id} em={resData.summary.em}>{resData.summary.text}</Summary>
                        )
                    }
                    break;
                case 'tools':
                case 'codes':
                case 'lings':
                case 'libs':
                    if (resData.skills && resData.skills[section.type]) {
                        resumeSections.push(
                            <Skills secTitle={section.title} id={section.id} items={resData.skills[section.type]} />
                        )
                    }
                    break;
                case 'hist':
                    if (resData.experience) {
                        resumeSections.push(
                            <WorkHist secTitle={section.title} id={section.id} items={resData.experience} />
                        )
                    }
                    break;
                case 'awards':
                    if (resData.awards) {
                        resumeSections.push(
                            <Awards secTitle={section.title} id={section.id} items={resData.awards} />
                        )
                    }
                    break;
                case 'edu':
                    if (resData.edu) {
                        resumeSections.push(
                            <Education secTitle={section.title} id={section.id} items={resData.edu} />
                        )
                    }
                    break;
                case 'projs':
                    if (resData.projs) {
                        resumeSections.push(
                            <Projects secTitle={section.title} id={section.id} items={resData.projs} />
                        )
                    }
                    break;
            }

            return resumeSections.length > oldLen ? (<NavItem tag="li"><NavLink href={'#' + section.id}>{section.name || section.title}</NavLink></NavItem>) : null;
        }) : [];

    return (
        <div className="container-fluid container-lg">
            <Row>
                <Col xs="12" md="2" className="d-none d-md-block res-sidenav" >
                    <ResNav children={navItems} dlfile={resData.dlfile || null} title="Résumé" />
                </Col>
                <Col xs="12" md="10" >
                    {resumeSections}
                </Col>
            </Row>
        </div>

    )
}

export default Resume;