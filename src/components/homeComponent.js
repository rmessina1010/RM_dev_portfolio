import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Icon } from './navigational';
import '../css/homePageStyles.css';
import homeData from '../shared/homeData';

function HeadCard({ card, odd, grid }) {
    if (!grid) {
        let sm = odd ? "12" : "6";
        let md = odd ? "4" : "3";
        grid = { xs: "12", sm, md }
    }
    let icon = card.icon ? (card.ilink ? <a href={card.ilink}><Icon icon={card.icon} attrs={card.attrs} /></a> : <Icon icon={card.icon} attrs={card.attrs} />) : null;

    let headline = card.head ? <h4>{card.link ? (<a href={card.link}>{card.head}</a>) : card.head}</h4> : null;
    let blurb = card.text ? <p dangerouslySetInnerHTML={{ __html: card.text }} /> : null;
    return (
        <Col   {...grid} key={card.id} className="text-center pb-4">
            {icon}
            {headline}
            {blurb}
        </Col>
    );
}

export function HeadDeck(props) {
    let cards = [];
    if (Array.isArray(props.cards)) {
        let isOdd = !(props.cards.length % 2 === 0)
        cards = props.cards.map(card => <HeadCard card={card} odd={isOdd} grid={props.grid} />);
    }
    let clssName = (props.clname || '') + (!props.ogrid ? ' justify-content-center' : '');
    let outerGrid = props.ogrid || { xs: '12', sm: '8', md: '10' };
    return cards.length > 1 ? (
        <div className="head-deck-wrap">
            <Container fluid='xl'>
                <Row className={clssName}>
                    <Col {...outerGrid} className="row px-sm-0" >{cards}</Col>
                </Row>
            </Container>
        </div>
    )
        : null;
}


export function SideHead(props) {
    return (
        <div className="head-deck-wrap">
            <Container fluid='xl'>
                <Row className={props.clname}>
                    <Col md="5" sm="10" xs="12" className="text-center text-md-right offset-sm-1  ">
                        <h3 className={props.hedClass}>{props.head}</h3>
                    </Col>
                    <Col md="5" sm="10" xs="12" className="offset-sm-1 offset-md-0 text-center text-md-left " dangerouslySetInnerHTML={{ __html: props.text }} />
                </Row>
            </Container>
        </div>
    )
}

export function TopHead(props) {
    return (
        <div className="head-deck-wrap">
            <Container fluid='xl'>
                <Row className={props.clname}>
                    <Col sm="10" xs="12" className="text-center offset-sm-1">
                        <h3 className={props.hedClass}>{props.head}</h3>
                    </Col>
                    <Col xs="12" sm="10" className="text-center offset-sm-1" dangerouslySetInnerHTML={{ __html: props.text }} />
                </Row>
            </Container>
        </div>

    )
}

export function ParalaxSec(props) {
    let style = {};
    let wrapStyle = {};
    let pclass = props.pclass || '';
    let wrapParalax = '';
    let rowParalax = '';
    let colSet;
    let tinter = (props.tint === 'tint' || props.tint === 'shade' || props.tint === 'tint-m' || props.tint === 'shade-m') ? props.tint + '-sec' : '';

    if (props.img) {
        if (props.imgPos) {
            wrapStyle.backgroundImage = 'url("' + props.img + '")';
            wrapParalax = ' paralax ' + tinter;
        }
        else {
            style.backgroundImage = 'url("' + props.img + '")';
            rowParalax = ' paralax ' + tinter;

        }
    }
    if (Array.isArray(props.cont)) {
        let lg = props.cont.length === 1 && props.lg ? props.lg : ''
        colSet = props.cont.map(part => (
            <Col xs='12' md='' lg={lg} className={part.colClass}>
                {part.hed ? <h2 className={"hero-hed " + (part.hedClass || '')}>{part.hed}</h2> : null}
                {part.sub ? <h3 className={"hero-sub " + (part.subClass || '')}>{part.sub}</h3> : null}
                {part.cont ? <p className={"hero-desc " + (part.contClass || '')} dangerouslySetInnerHTML={{ __html: part.cont }} /> : null}
                { Array.isArray(part.btns) ? (
                    <div className={"hero-links " + (part.btnClass || '')} >{
                        part.btns.map(link => <Button color="none hero-btn" outline={link.outline || null} href={link.url}>{link.text}</Button>)
                    }</div>) : null}
            </Col>
        ))
    } else {
        colSet = null;
    }

    return (
        <div className={"head-deck-wrap" + wrapParalax} style={wrapStyle}>
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
        let clname = '';
        if (section.clname) { clname = section.clname; }
        switch (section.type) {
            case 'deck':
                clname += ' cardRow';
                return <HeadDeck cards={section.cont} clname={clname} ogrid={section.ogrid} grid={section.grid} />;
            case 'side':
                return <SideHead head={section.head} text={section.text} clname={clname} />;
            case 'top':
                return <TopHead head={section.head} text={section.text} clname={clname} />;
            case 'plax':
                return <ParalaxSec img={section.img} imgPos={section.imgPos ? true : false} cont={section.cont} tint={section.tint} />;
            default:
                return null;
        }
    });
    return (
        <div className='home-page'>
            {homeSections}
        </div>
    )

}


