import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import SiteData from '../shared/siteData'
import MainNav from './mainNavComponent';
import Footer from './footerComponent';
import Resume from './resumePageComponent';
import ContactPage from './contactForm';
import ProjectsPage from './projectsComponent';
import HomePage from './homeComponent';
import BlogPage, { BlogArticle } from './blogComponent';

class Main extends Component {

    render() {
        return (
            <Container fluid className="p-0">
                <MainNav url="/home/" children={SiteData.pages} siteName={SiteData.info.siteName} />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/projects" component={ProjectsPage} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path={["/musings", "/musings/articles", "/musings/tags"]} component={BlogPage} />
                    <Route exact path="/musings/articles/:article" component={BlogArticle} />
                    <Redirect to="/home" />
                </Switch>
                <Footer social={SiteData.social} info={SiteData.info} links={SiteData.pages} />
            </Container>
        );
    }
}
export default Main;