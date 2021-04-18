import React from 'react';
import { Row, Col, Nav, Button } from 'reactstrap';
import { CURRENT_DATE } from '../shared/resumeData';

function dateToMoYear(date, Present = 'Present') {
    if (date === CURRENT_DATE) { return Present; }
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    if (mo !== 'May' && mo !== 'June' && mo !== 'July') { mo = mo + '.'; }
    return mo + String.fromCharCode(160) + ye;
}

function ResumeSection(props) {
    let id = props.id || null;
    return (
        <Row className="res-sec">
            <Col tag="h4" className="sec-hed" xs="12" lg="3" xl="2" id={id}>{props.secTitle}</Col>
            {props.children}
        </Row>
    )
}

export function ResNav(props) {
    let dlButton = props.dlfile ?
        <Button className="dlfile-button mr-3 mb-3 float-right  float-md-none mt-3" size='sm' href={props.dlfile.url} download={props.dlfile.name || null}>{'Download ' + (props.dlfile.text || 'File')}</Button>
        :
        null;

    return (
        <div className="resnav position-sticky clearfix">
            {props.title ? <h2 className="float-left float-md-none mt-3">{props.title}</h2> : null}
            <Nav className="navList  d-none d-md-block position-sticky mr-lg-1 mr-xl-3 mb-3" vertical tag="ul">
                {props.children}
            </Nav>

            {dlButton}

        </div>
    )
}

export function BadgeList(props) {
    let items = Array.isArray(props.items) ? props.items.map(item => (<Col tag="li" xs="6" sm="4" md="3" className="badges"> <span>{item.name}{item.extra ? <small>{item.extra}</small> : null}</span></Col>)) : null;
    return (
        <Row tag="ul" className="badge-list no-gutters">
            {items}
        </Row>
    );
}

export function EduList(props) {
    let items = Array.isArray(props.items) ? props.items.map(item => (
        <li><strong className="edu-deg">{item.name}</strong>{' from ' + (item.the || '') + ' ' + item.inst}{item.detail ? (<em className="edu-detail" dangerouslySetInnerHTML={{ __html: '—' + item.detail }} />) : null}</li>
    )) : null;
    return (
        <ul className="edu-list">
            {items}
        </ul>
    );
}

export function AwardList(props) {
    let items = Array.isArray(props.items) ? props.items.map(item => (
        <li><strong className="award-name" dangerouslySetInnerHTML={{ __html: item.name }} />{item.detail ? (<span dangerouslySetInnerHTML={{ __html: ' ' + item.detail }} />) : null}</li>
    )) : null;
    return (
        <ul className="edu-list">
            {items}
        </ul>
    );
}

export function JobHighlightsList(props) {
    let items = Array.isArray(props.items) ? props.items.map(item => (<li dangerouslySetInnerHTML={{ __html: item }} />)) : null;
    return (
        <ul className="job-des-list">
            {items}
        </ul>
    );
}

export function ProjectList(props) {
    let items = Array.isArray(props.items) ? props.items.map(item => (
        <li key={item.id}>
            <h5>{item.link ?
                <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
                : item.name
            }</h5>
            <p dangerouslySetInnerHTML={{ __html: item.desc }} />
            <p className="stack">[ {item.stack} ]</p>
        </li>
    )) : null;
    return (
        <ul className="project-list"  >
            {items}
        </ul>
    );
}

export function EmployerList(props) {
    let items = Array.isArray(props.items) ? props.items.map(item => (
        <Row className="history-item">
            <Col xs="12" lg="3" >
                <h6 className="dates float-sm-left">{dateToMoYear(item.startDate)}{' — '}{dateToMoYear(item.endDate)}</h6>
                <h6 className="employer float-sm-right float-lg-left">
                    {item.employer}
                    <span className="d-lg-none">, </span>
                    <span className="city d-inline-block d-lg-block">{item.location}</span>
                </h6>

            </Col>
            <Col xs="12" lg="9" >
                <h5 className="title ">{item.title}</h5>
                {(item.desc && item.showDesc) ? <p className="job-desc">{item.desc}</p> : null}
                {Array.isArray(item.highlighs) ? <JobHighlightsList items={item.highlighs} /> : null}
            </Col>
        </Row>
    )) : null;
    return (
        <ul className="history-list"  >
            {items}
        </ul>
    );
}

export function Summary(props) {
    let em = props.em ? <strong>{props.em}</strong> : null;
    let summary = props.children;
    let id = props.id || 'summary';
    let title = props.secTitle || 'Summary';
    return (em || summary) ? (
        <ResumeSection secTitle={title} id={id}>
            <Col tag="p" className="statement">
                {em}{' '}
                {summary}
            </Col>
        </ResumeSection>
    ) : null;
}

export function Skills(props) {
    let id = props.id || 'skills';
    let title = props.secTitle || 'Skills';
    return props.items ? (
        <ResumeSection secTitle={title} id={id}>
            <Col>
                <BadgeList items={props.items} />
            </Col>
        </ResumeSection>
    ) : null;
}

export function Education(props) {
    let id = props.id || 'education';
    let title = props.secTitle || 'Education';
    return props.items ? (
        <ResumeSection secTitle={title} id={id}>
            <Col>
                <EduList items={props.items} />
            </Col>
        </ResumeSection>
    ) : null;
}


export function Awards(props) {
    let id = props.id || 'awards';
    let title = props.secTitle || 'Awards';
    return props.items ? (
        <ResumeSection secTitle={title} id={id}>
            <Col>
                <AwardList items={props.items} />
            </Col>
        </ResumeSection>
    ) : null;
}

export function Projects(props) {
    let id = props.id || 'projects';
    let title = props.secTitle || 'Projects';
    return props.items ? (
        <ResumeSection secTitle={title} id={id}>
            <Col>
                <ProjectList items={props.items} />
            </Col>
        </ResumeSection>
    ) : null;
}

export function WorkHist(props) {
    let id = props.id || 'experience';
    let title = props.secTitle || 'Work History';
    return props.items ? (
        <ResumeSection secTitle={title} id={id}>
            <Col>
                <EmployerList items={props.items} />
            </Col>
        </ResumeSection>
    ) : null;
}

