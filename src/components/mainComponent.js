import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import SiteData from '../shared/siteData'
import MainNav from './mainNavComponent';
import Footer from './footerComponent';
import Resume from './resumePageComponent';
import ContactForm from './contactForm';
import ProjectsPage from './projectsComponent';

class Main extends Component {

    render() {
        return (
            <Container fluid className="p-0">
                <MainNav url="/home/" children={SiteData.pages} siteName={SiteData.info.siteName} />
                <Switch>
                    {/* <Route exact path="/about" component={ContactForm} /> */}
                    <Route exact path="/projects" component={ProjectsPage} />
                    {/* <Route exact path="/rants" component={ContactForm} /> */}
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={ContactForm} />
                </Switch>
                <Footer social={SiteData.social} info={SiteData.info} links={SiteData.pages} />
            </Container>
        );
    }
}
export default Main;