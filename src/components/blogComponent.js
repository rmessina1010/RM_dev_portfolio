import React, { Component } from 'react';
import { Row, Col, Container, Card, CardHeader, CardTitle } from 'reactstrap';
import blogIndex from '../shared/blogRegistry';
import { AnchorLink } from './navigational';
import '../css/blogStyles.css';
import '../css/projectStyles.css';
import CardBody from 'reactstrap/lib/CardBody';

class BlogPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indexList: blogIndex,
            curr: blogIndex[blogIndex.length - 1]
        }
    }

    render() {
        return (<div className="proj-page" >
            <div className="page-title">
                <Container fluid='xl' className="px-2  px-xl-3 "> <BlogIntro /></Container>
            </div>
            <Container fluid="xl"  >
                <BlogList items={this.state.indexList} currBlog={this.state.curr} relroot='musings/' />
            </Container>
        </div>)
    }
}

export function BlogList(props) {
    return (<Row tag="ul" className="pl-0 d-flex"> {props.items.filter(item => !item.hide).map(item => <BlogCard key={item.id} details={item} relroot={props.relroot} />)}</Row>);
}

export class CurrentArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null
        }
    }

    render() {
        return <div>pending writing...</div>;
    }
}

export function LoadPlacehold(props) {
    return (<div className="placehold"><span>{props.message || 'Loading...'}</span></div>);
}

function BlogIntro(props) {
    return (<>
        <h2>Musings</h2>
        <p>Just a place to keep my toughts and opinions on varous topics, ranging from art, to travel, to developement and other stops in between.</p>
    </>);
}

function NotFound(props) {
    return (<div>
        <h1>OOPS!!!</h1>
        <p>There doesnt apear to be any musings on that topic.</p>
    </div>);
}

function BlogCard({ details, relroot }) {
    return (
        <Col tag="li" sm="6" lg="4" className=" blog-card-li mb-4" >
            <Card className="proj-card">
                <CardHeader className="proj-card-hed ">
                    <CardTitle tag="h3" className="blog-card-title"><AnchorLink key={details.id} href={relroot + details.path} children={details.title} /></CardTitle>
                </CardHeader>
                <CardBody>
                    <div className="blog-date pb-2"><i class="far fa-calendar"></i> <time>{details.date.toLocaleString('en-US')}</time></div>
                    {details.excerpt ? <p className=" pb-1" dangerouslySetInnerHTML={{ __html: details.excerpt }} /> : null}
                    {details.tags.length ? <div className="blog-tags"><i class="fa fa-tags"></i> {details.tags.join(', ')}</div> : null}
                </CardBody>
            </Card>
        </Col>
    )
}

export default BlogPage;