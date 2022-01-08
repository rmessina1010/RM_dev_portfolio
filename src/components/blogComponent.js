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
            indexList: <LoadPlacehold />,
        }
    }

    async obtainList() {
        this.setState({ indexList: <LoadPlacehold /> });
        await fetch("https://raymessinadesign.com/blog/blog_registry.php")
            .then(resp => resp.status === 200 ? resp.json() : null)
            .then(resp => {
                this.setState({
                    indexList: resp ? <BlogList items={resp} relroot='musings/articles/' />
                        : <NotFound className="blog-article px-0" p="There doesn't apear to be any musings available." />
                });
            })
            .catch((err) => {
                this.setState({ indexList: <NotFound className="blog-article px-0" p={"Error: " + err.message} /> });
            });
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
    async obtainArticle() {
        this.setState({ article: <LoadPlacehold /> });
        await fetch("https://raymessinadesign.com/blog/new_blog_service.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "s=" + this.props.match.params.article
        })
            .then(resp => resp.status === 200 ? resp.text() : null)
            .then(resp => {
                this.setState({
                    article: resp !== "404" ? <Container fluid="xl" className="blog-article px-0 py-3" ><Col className="m-auto" sm="12" md="10" lg="8" dangerouslySetInnerHTML={{ __html: resp }} /></Container> :
                        <Container fluid="xl" className="py-3 blog-article" ><NotFound className="col  m-auto" /></Container>
                });
            })
            .catch((err) => {
                this.setState({
                    article: <Container fluid="xl" className="py-3 blog-article" ><NotFound className="col m-auto" p={"Error: " + err.message} /></Container>
                });
            });
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
                    <CardTitle tag="h3" className="blog-card-title"><AnchorLink href={relroot + details.slug} children={details.title} /></CardTitle>
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