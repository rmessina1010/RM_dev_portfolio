import React, { Component } from 'react';
import { AnchorLink, IconLink } from './navigational';
import { Row, Col, Container } from 'reactstrap';
import '../css/footerStyles.css';



class FooterLinks extends Component {
    render() {
        let children = [];
        if (this.props.children && this.props.children.forEach) {
            this.props.children.forEach((child) => {
                if ((child.include.indexOf("footer") < 0 && child.include.length) || child.exclude.indexOf("footer") > -1) { return; }
                if (!this.props.noPipes && children.length > 0) { children.push(" | "); }
                children.push(
                    <AnchorLink href={child.url} children={child.text} key={"footnavlink" + child.id} />
                );
            });
        }
        return (
            <nav className="footnav">
                {children}
            </nav>
        );
    }
}


class SocialFooterLinks extends Component {
    render() {
        let children = [];
        if (this.props.children && this.props.children.forEach) {
            this.props.children.forEach((child) => {
                children.push(
                    <IconLink href={child.url} key={"footsocial" + child.id} attrs={{ target: (child.url.indexOf('http') === 0 ? "_blank" : null) }} icon={{ icon: child.icon }} />
                );
            });
        }
        return (
            <div className="social-footer">
                {children}
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        let copyrightDate = new Date().getFullYear();
        let siteInfo = this.props.info;
        copyrightDate = (copyrightDate > siteInfo.copyright) ? siteInfo.copyright + '-' + copyrightDate : siteInfo.copyright;
        return (
            <div className="site-footer">
                <Container className=" py-3 " fluid="xl">
                    <Row>
                        <Col xs="12" md="6" lg="4" className="text-center text-md-left "><FooterLinks children={this.props.links} /></Col>
                        <Col xs="12" lg="4" className="text-center order-md-3 text-lg-right"><SocialFooterLinks children={this.props.social} /></Col>
                        <Col xs="12" md="6" lg="4" className="text-center text-md-right text-lg-center copyright">&copy; {copyrightDate} {siteInfo.author}</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;