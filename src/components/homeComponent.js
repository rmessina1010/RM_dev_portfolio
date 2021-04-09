import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/homePageStyles.css';
import { homeData } from '../shared/homeData';


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
            {homeSections}
        </Container>
    )

}


