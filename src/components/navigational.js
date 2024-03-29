import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class IconLink extends Component {
    render() {
        return (this.props.href.substr(0, 4) === 'http' || this.props.href.substr(0, 7) === 'mailto:') ?
            (<a href={this.props.href} rel="noreferrer" {...this.props.attrs}>{this.props.childBef}<i className={this.props.icon.icon} {...this.props.icon.attrs} />{this.props.childAft}</a>)
            : (<NavLink to={this.props.href} {...this.props.attrs}>{this.props.childBef}<i className={this.props.icon.icon} {...this.props.icon.attrs} />{this.props.childAft}</NavLink>);
    }
}


class AnchorLink extends Component {

    render(props) {
        return (this.props.href.substr(0, 4) === 'http' || this.props.href.substr(0, 7) === 'mailto:') ?
            (<a href={this.props.href} {...this.props.attrs} rel="noreferrer">
                {this.props.children}
            </a>)
            : (<NavLink to={this.props.href} {...this.props.attrs}>
                {this.props.children}
            </NavLink>);
    }
}


class Icon extends Component {
    render() {
        let baseClass = this.props.clist ? this.props.clist : '';
        baseClass += this.props.icon;
        return (
            <i className={baseClass} {...this.props.attrs} aria-hidden="true" />
        );
    }
}

export { Icon, IconLink, AnchorLink }
