import React, { Components } from 'react';
import { Row, Col } from 'reactstrap';

function ResSecTitle(props) {
    return (
        <h3>{props.title}</h3>
    )
}

function ResumeItem(props) {
    let liClass = "col " + (props.level ? props.level + " " : "") + props.type;
    let text = props.level ? (<span className={props.level}>{props.name}</span>) : props.name;
    return (
        <li className={liClass} key={props.type + props.id}>{text}</li>
    )
}

export function Summary(props) {
    return (
        <div>
            <ResSecTitle tilte="Summary" />
            <p className="summary">Award winning, senior level designer/developer with over 20 years of professional experience in Marketing and Communications. A coder who designs and a designer who codes. Demonstrated ability to translate client ideas into functioning reality. Has passion for learning and well-honed trouble shooting and problem solving skills. A strategic and conceptual thinker with a balanced of mix of creative talent and technical know how. Leads by example with an easy-going manner and builds trust by sharing knowledge, vision and experience with colleagues.</p>
        </div>
    );
}

export function Tools(props) {
    const toolItems = resumeData.tools.map(tool => (<ResumeItem name={tool.name} level={tool.level} id={tool.id} type="tool" />));
    return (
        <div>
            <ResSecTitle tilte="Tools" />
            <ul className="row tool-list">
                {toolItems}
            </ul>
        </div>
    );
}

export function Skills(props) {
    const skillItems = resumeData.skills.map(skill => (<ResumeItem name={skill.name} id={skill.id} type="skill" />));
    return (
        <div>
            <ResSecTitle tilte="Skills" />
            <ul className="row skill-list">
                {skillItems}
            </ul>
        </div>
    );
}

export function Languages(props) {
    const langItems = resumeData.langs.map(lang => (<ResumeItem name={lang.name} level={lang.level} id={lang.id} type="lang" />));
    return (
        <div>
            <ResSecTitle tilte="Languages" />
            <ul className="row lang-list">
                {langItems}
            </ul>
        </div>
    );
}

export function Education(props) {
    return (
        <div>
            <ResSecTitle tilte="Eductation" />
            <p><strong>BFA Degree from the State University of New York at Oswego.</strong> Concentrations in <em>Studio Art</em> and <em>Graphic Design</em>, <em>Minor</em> in <em>English</em>—May 1994; graduate standing <em>Cum Laude</em>.</p>
        </div>
    );
}

export function Certs(props) {
    return (
        <div>
            <ResSecTitle tilte="Certifications" />
            <p><strong>Fullstack Developer Certification</strong> from <i>NuCamp Coding</i> Bootcamp emphasis on Bootstrap, React, React Native, Node, and Mongo DB</p>
        </div>
    );
}


export function References(props) {
    return (
        <div>
            <ResSecTitle tilte="References" />
            <p>References available upon request.</p>
        </div>
    );
}

export function Awards(props) {
    const awardItems = resumeData.awards.map(award => (<li className="acolade" dangerouslySetInnerHTML={award.desc} key={"award" + award.id} />
    ));
    return (
        <div>
            <ResSecTitle tilte="Acolades" />
            <ul className="row award-list">
                {awardItems}
            </ul>
        </div>
    );
}
