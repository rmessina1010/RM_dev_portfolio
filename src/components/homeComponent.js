import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Icon } from './navigational';
import '../css/homePageStyles.css';
import homeData from '../shared/homeData';

const testDeck = [
    {
        head: "A deck item",
        text: "Projects..blah blah",
        icon: "fa fa-house",
    },
    {
        head: "Another deck item",
        text: "Projects..blah blah",
        icon: "fa fa-house",
    },
    {
        head: "A different headline",
        text: "Projects..blah blah",
        icon: "fa fa-house",
    },
    {
        head: "Yet another deck item",
        text: "Projects..blah blah",
        icon: "fa fa-house",
    }

]


function HeadCard({ card, count }) {
    let sm = count ? "12" : "6";
    let md = count ? "4" : "3";
    let icon = card.icon ? (card.ilink ? <a href={card.ilink}><Icon icon={card.icon} /></a> : <Icon icon={card.icon} />) : null;

    let headline = card.head ? <h4>{card.link ? (<a href={card.link}>{card.head}</a>) : card.head}</h4> : null;
    let blurb = card.text ? <p dangerouslySetInnerHTML={{ __html: card.text }} /> : null;
    return (
        <Col xs="12" sm={sm} md={md} key={card.id} className="text-center">
            {icon}
            {headline}
            {blurb}
        </Col>
    );
}

function HeadDeck(props) {
    let cards = Array.isArray(props.cards) ? props.cards.map(card => <HeadCard card={card} />) : null;
    return cards.length > 1 ? (
        <div className="head-deck-wrap">
            <Container fluid='xl'>
                <Row className={props.clname}>
                    <Col xs="12" sm="8" md="10" className="row offset-sm-2 offset-md-1 px-sm-0" >{cards}</Col>
                </Row>
            </Container>
        </div>
    )
        : null;
}


function SideHead(props) {
    return (
        <div className="head-deck-wrap">
            <Container fluid='xl'>
                <Row className={props.clname}>
                    <Col tag="h3" md="5" sm="8" xs="12" className="text-center text-md-right offset-sm-2 offset-md-1">
                        {props.head}
                    </Col>
                    <Col md="5" sm="8" xs="12" className="offset-sm-2 offset-md-0" dangerouslySetInnerHTML={{ __html: props.text }} />
                </Row>
            </Container>
        </div>
    )
}

function TopHead(props) {
    return (
        <div className="head-deck-wrap">
            <Container fluid='xl'>
                <Row className={props.clname}>
                    <Col tag="h3" sm="10" xs="12" className="text-center offset-sm-1">
                        {props.head}
                    </Col>
                    <Col xs="12" sm="10" className="text-center offset-sm-1" dangerouslySetInnerHTML={{ __html: props.text }} />
                </Row>
            </Container>
        </div>

    )
}

function ParalaxSec(props) {
    let style = {};
    let wrapStyle = {};
    let pclass = props.pclass || '';
    let wrapParalax = '';
    let rowParalax = '';
    let colSet;

    if (props.img) {
        if (props.imgPos) {
            wrapStyle.backgroundImage = 'url("' + props.img + '")';
            wrapParalax = ' praralax '
        }
        else {
            style.backgroundImage = 'url("' + props.img + '")';
            rowParalax = ' praralax '

        }
    }
    if (Array.isArray(props.cont)) {
        let lg = props.cont.length === 1 && props.lg ? props.lg : ''
        colSet = props.cont.map(part => (
            <Col xs='12' md='' lg={lg} >
                {part.hed ? <h2 className={"hero-hed " + (part.hedClass || '')}>{part.hed}</h2> : null}
                {part.sub ? <h3 className={"hero-sub " + (part.subClass || '')}>{part.sub}</h3> : null}
                {part.cont ? <p className={"hero-desc " + (part.contClass || '')} dangerouslySetInnerHTML={{ __html: part.cont }} /> : null}
                { Array.isArray(part.btns) ? (
                    <div className={"hero-links " + (part.btnClass || '')} >{
                        part.btns.map(link => <Button className="hero-btn" outline={link.outline || null} href={link.url}>{link.text}</Button>)
                    }</div>) : null}
            </Col>
        ))
    } else {
        colSet = null;
    }

    return (
        <div className={"head-deck-wrap paralax" + wrapParalax} style={wrapStyle}>
            <Container fluid='xl'>
                <Row className={'paralax-content' + rowParalax + pclass} style={style} >
                    <Col xs="12" sm="10" md="10" className="row  px-sm-0 justify-content-center" >{colSet}</Col>
                </Row>
            </Container>
        </div>
    )
}
export default function HomePage(props) {
    let homeSections = homeData.map(section => {
        let clname = [];
        if (section.clname) { clname.push(section.clname); }
        switch (section.type) {
            case 'deck':
                clname.push('cardRow');
                return <HeadDeck cards={section.cont} clname={clname} />;
            case 'side':
                return <SideHead head={section.head} text={section.text} clname={clname} />;
            case 'top':
                return <TopHead head={section.head} text={section.text} clname={clname} />;
            case 'plax':
                return <ParalaxSec img={section.img} imgPos={section.imgPos ? true : false} cont={section.cont} />;
            default:
                return null;
        }
    });
    return (
        <div className='home-page'>
            <TopHead
                clname={['py-5']}
                head="Hello. Am Ray Messina and this is filler text of a longish style vervose header. things will wrk out"
                text="lorem ipsum...I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?"
            />
            {homeSections}
        </div>
    )

}


