import React, { Component } from 'react';
import { Row, Col, Container, Card, CardHeader, CardTitle } from 'reactstrap';
//import blogIndex from '../shared/blogRegistry';
import {obtainListService, obtainArticleService}  from '../services'
import { AnchorLink  } from './navigational';
import { preventWidows  } from '../shared/helpers';
import '../css/blogStyles.css';
import '../css/projectStyles.css';
import CardBody from 'reactstrap/lib/CardBody';

class BlogPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indexList: <LoadPlacehold />,
        }
    }

    obtainList() {
        this.setState({ indexList: <LoadPlacehold /> });
        obtainListService()
        .then(resp =>  this.setState({ indexList: resp.success ?
            <BlogList items={resp.list} relroot='musings/articles/' />
            :<NotFound className="blog-article px-0" p= { resp.err ? "Error: " + resp.err : "There doesn't apear to be any musings available."   }  />
            })
        );
    }

    componentDidMount() { this.obtainList(); }

    render() {
        return (<div className="proj-page" >
            <div className="page-title">
                <Container fluid='xl' className="px-2  px-xl-3"> <BlogIntro /></Container>
            </div>
            <Container fluid="xl"  >{this.state.indexList}</Container>
        </div>)
    }
}

export function BlogList(props) {
    return (<Row tag="ul" className="pl-0 d-flex"> {props.items.filter(item => !item.hide).map(item => <BlogCard key={item.id} details={item} relroot={props.relroot} />)}</Row>);
}

export class BlogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: <LoadPlacehold />,
        }
    }

    obtainArticle() {
        this.setState({ article: <LoadPlacehold /> });
        obtainArticleService(this.props.match.params.article)
        .then(resp =>  this.setState({ article: resp.success ?
            <Container fluid="xl" className="blog-article px-0 py-3" ><Col className="m-auto" sm="12" md="10" lg="8" dangerouslySetInnerHTML={{ __html: resp.post }} /></Container>
            :<Container fluid="xl" className="py-3 blog-article" ><NotFound className="col m-auto" p={resp.err} /></Container>
            })
        );
    }

    componentDidMount() { this.obtainArticle(); }

    render() {
        return <div className="blog-page"> {this.state.article} </div>
    }
}

export function LoadPlacehold(props) {
    return (<div className="placehold"><span>{props.message || 'Loading...'}</span></div>);
}

function BlogIntro(props) {
    return (<>
        <h2>Musings</h2>
        <p>Just a place to keep my thoughts and opinions on various topics, ranging from art, to travel, to development and other stops in between.</p>
        <p>This change is temporary.</p>
    </>);
}

function NotFound(props) {
    return (<>
        <h1>{props.h1 || "OOPS!!!"}</h1>
        <p>{props.p || "There doesn't apear to be any musings on that topic."}</p>
    </>);
}

function BlogCard({ details, relroot }) {
    return (
        <Col tag="li" md="6" className=" blog-card-li mb-4" >
            <Card className="proj-card">
                <CardHeader className="proj-card-hed ">
                    <CardTitle tag="h3" className="blog-card-title"><AnchorLink href={relroot + details.slug} children={preventWidows(details.title)} /></CardTitle>
                </CardHeader>
                    { (details.thumb && typeof details.thumb === 'string') ? <div className="blog-thumb"><img  src={details.thumb} alt ={ details.alt || "image for "+details.title}/></div> : null}
                <CardBody>
                    <div className="blog-date pb-2"><i className="far fa-calendar"></i> <time>{(new Date(details.date || 0)).toLocaleString('en-US')}</time></div>
                    {details.excerpt ? <p className=" pb-1" dangerouslySetInnerHTML={{ __html: details.excerpt }} /> : null}
                    {details.tags.length ? <div className="blog-tags"><i className="fa fa-tags"></i> {details.tags.join(', ')}</div> : null}
                </CardBody>
            </Card>
        </Col>
    )
}



export default BlogPage;