import React, { Component } from 'react';
import { AnchorLink, IconLink } from './navigational';



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
            <footer className="site-footer container-fluid container-xl py-3">
                <SocialFooterLinks children={this.props.social} />
                <div className="copyright">&copy; {copyrightDate} {siteInfo.author}</div>
            </footer>
        );
    }
}

export default Footer;