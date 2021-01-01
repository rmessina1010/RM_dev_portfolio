import React, { Component } from 'react';
//import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import SiteData from '../shared/siteData'
import MainNav from './mainNavComponent';
import Footer from './footerComponent';
import ContactForm from './contactForm';

class Main extends Component {

    render() {
        return (
            <Container fluid className="p-0">
                <MainNav url="/home/" children={SiteData.pages} siteName={SiteData.info.siteName} />
                <ContactForm />
                <Footer social={SiteData.social} info={SiteData.info} />
            </Container>
        );
    }
}
export default Main;