import React from 'react';
import { Row, Col, Card, CardBody, CardImg, Button, CardHeader, CardTitle, Container } from 'reactstrap';
import projectData from '../shared/projectList';
import '../css/projectStyles.css';


export function QR(props) {
    return (
        <span
            className="qr-wrap ml-n3 ml-sm-n5"
            onClick={e => e.target.closest('.qr-btn').classList.remove('show-qr')}
        >
            <span className="qr-wrap-inner">
                <img src={props.src} alt="qr-code" />
                {props.txt ? <span>{props.txt} </span> : null}
            </span>
        </span>
    )
}
export function ProjectCard(props) {
    let cardTag = props.cardTag || 'div';
    let proj = props.proj;
    let stackItems = Array.isArray(proj.stack) && proj.stack.length ? proj.stack.map(item => (<li key={item}>{item}</li>)) : null;
    let roleList = Array.isArray(proj.roles) && proj.roles.length ?
        (<Col xs="12" lg="6">
            <h5>Role</h5>
            <ul className="proj-stack">
                {proj.roles.map((item, indx) => (<li key={indx}>{item}</li>))}
            </ul>
        </Col>)
        : null;
    let viewButtons = Array.isArray(proj.links) ? proj.links.map((link, indx) => (
        <Button
            href={!link.qr ? link.url : null}
            onClick={link.qr ? e => e.target.classList.toggle('show-qr') : null}
            disabled={link.disabled || null}
            target='_new'
            className="mr-2 mb-2 qr-btn"
            key={indx}
        >
            {link.text}
            {link.qr ? <QR src={link.url} txt={link.qrtxt} /> : null}
        </Button>
    )) : null;
    return proj ? (
        <Card tag={cardTag} className="proj-card" key={proj.id}>
            <CardHeader className="proj-card-hed">
                <CardTitle tag="h3" >{proj.name}</CardTitle>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col xs="12" sm="5" lg="4">
                        <CardImg src={proj.thumb} />
                        <div className="d-none d-sm-block text-center">
                            <h5 className="ml-0">View</h5>
                            <nav className="proj-view">
                                {viewButtons}
                            </nav>
                        </div>
                    </Col>
                    <Col xs="12" sm="7" lg="8">
                        <div className="proj-desc" dangerouslySetInnerHTML={{ __html: proj.desc }} />
                        <Row>
                            <Col xs="12" lg={roleList ? "6" : null}>
                                <h5>Stack</h5>
                                <ul className="proj-stack">
                                    {stackItems}
                                </ul>
                            </Col>
                            {roleList}
                        </Row>
                    </Col>
                    <Col xs="12" className="d-block d-sm-none">
                        <h5>View</h5>
                        <nav className="proj-view">
                            {viewButtons}
                        </nav>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    ) : null;
}

export function ProjectDeck(props) {
    let cardTag = typeof props.tag === 'string' ? props.tag.toUpperCase() : 'div';
    cardTag = (cardTag === 'UL' || cardTag === 'OL') ? 'li' : 'div';
    let projectItems = Array.isArray(props.projs) ? props.projs.map(proj => (!proj.inactive || proj.inclInact) ? <ProjectCard cardTag={cardTag} proj={proj} key={proj.id} /> : false) : null;
    return (
        <Container tag={props.tag} fluid='xl' >
            {projectItems}
        </Container>
    )
}

function ProjectsPage(props) {
    return (
        <div className="proj-page" >
            <div className="page-title">
                <Container fluid='xl' className="px-2  px-xl-3 "><h2>Projects</h2></Container>
            </div>
            <ProjectDeck tag={props.tag} projs={projectData} />
        </div>
    )
}


export default ProjectsPage;