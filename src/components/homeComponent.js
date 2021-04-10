import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/homePageStyles.css';
import { homeData } from '../shared/homeData';

function SideHead(props) {
    return (
        <Row className={props.clname}>
            <Col tag="h3" md="5" sm="8" xs="12" className="text-center text-md-right offset-sm-2 offset-md-1">
                {props.head}
            </Col>
            <Col md="5" sm="8" xs="12" className="offset-sm-2 offset-md-0" dangerouslySetInnerHTML={{ __html: props.text }} />
        </Row>
    )
}

function TopHead(props) {
    return (
        <Row className={props.clname}>
            <Col tag="h3" lg="8" sm="10" xs="12" className="text-center   offset-lg-2  offset-sm-1">
                {props.head}
            </Col>
            <Col lg="8" xs="12" sm="10" className="text-center   offset-lg-2 offset-sm-1" dangerouslySetInnerHTML={{ __html: props.text }} />
        </Row>
    )
}

function ParalaxSec(props) {
    let style = {};
    let pclass = props.pclass || '';
    if (props.img) { style.backgroundImage = props.img }

    const colSet = Array.isArray(props.cont) ?
        props.cont.map(part => {
            switch (part.type) {
                case 'desc':
                    return (<Col xs='12' className="hero-desc" dangerouslySetInnerHTML={{ __html: part.cont }} />);
                case 'sub':
                    return (<Col tag='h3' xs='12' className="hero-sub">{part.cont}</Col>);
                case 'link':
                    return Array.isArray(part.cont) ? (<Col xs='12' className="hero-links d-flex">{
                        part.cont.map(link => <Button className="hero-btn" outline={link.outline || null} href={link.url}>{link.text}</Button>)
                    }</Col>) : null;
                default:
                    return (<Col tag='h2' xs='12' className="hero-hed" >{part.cont}</Col>)
            }
        })
        : null;

    return (
        <Row className={'home-sec-wrap' + pclass} style={style} >
            {colSet}
        </Row>
    )
}
export default function HomePage(props) {
    const homeSections = [];
    return (
        <Container fluid='xl' className='home-page'>
            <SideHead
                clname={['py-5']}
                head="Hello. Am Ray Messina and this is filler text of a longish style vervose header. things will wrk out"
                text="lorem ipsum...I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?"
            />
            {homeSections}
        </Container>
    )

}


