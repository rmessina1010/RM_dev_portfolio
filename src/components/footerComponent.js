import React, { Component } from 'react';
import { AnchorLink, IconLink } from './navigational';
import { Row, Col } from 'reactstrap';



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
                    <IconLink href={child.url} key={"footsocial" + child.id} attrs={{ target: (child.url.indexOf('http') === 0 ? "_blank" : null), className: "text-primary btn" }} icon={{ icon: child.icon }} />
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
            <footer className="site-footer container-fluid container-xl py-3 text-center">
                <Row>
                    <Col xs="12" sm="6" md="5"><FooterLinks children={this.props.links} /></Col>
                    <Col xs="12" sm="6" md="5" ><SocialFooterLinks children={this.props.social} /></Col>
                    <Col className="copyright" xs="12" md="2">&copy; {copyrightDate} {siteInfo.author}</Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;