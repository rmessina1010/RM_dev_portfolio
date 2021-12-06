import React, { Component } from 'react';
import { Row, Col, Container, Card, CardHeader } from 'reactstrap';
import blogIndex from '../shared/blogRegistry';
import { AnchorLink } from './navigational';
import '../css/blogStyles.css';
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
        return (
            <Container fluid="xl">
                <BlogIntro />
                <BlogList items={this.state.indexList} currBlog={this.state.curr} relroot='musings/' />
            </Container>
        )
    }
}

export function BlogList(props) {
    return (<Row tag="ul" className="py-3 pl-0"> {props.items.filter(item => !item.hide).map(item => <BlogCard key={item.id} details={item} relroot={props.relroot} />)}</Row>);
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
    return (<div className="pt-4">
        <h2>Musings</h2>
        <p>Just a place to keep my toughts and opinions on varied topics, ranging from art, to travel, to developement and other stops in between.</p>
    </div>);
}

function NotFound(props) {
    return (<div>
        <h1>OOPS!!!</h1>
        <p>There doesnt apear to be any musings on that topic.</p>
    </div>);
}

function BlogCard({ details, relroot }) {
    return (
        <Col tag="li" sm="6" lg="4" className="my-2 blog-card-li" >
            <Card >
                <CardHeader tag="h3"><AnchorLink key={details.id} href={relroot + details.path} children={details.title} /></CardHeader>
                <CardBody>
                    <div><i class="far fa-calendar"></i> <time>{details.date.toDateString()}</time></div>
                    {details.excerpt ? <p dangerouslySetInnerHTML={{ __html: details.excerpt }} /> : null}
                    {details.tags.length ? <div><i class="far fa-tags"></i> {details.tags.join(',')}</div> : null}
                </CardBody>
            </Card>
        </Col>
    )
}

export default BlogPage;