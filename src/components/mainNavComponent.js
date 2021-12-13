import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/mainNavStyles.css';


class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    render() {
        let items = [];

        const toggle = () => this.setState({ isOpen: !this.state.isOpen });

        const closeOnClick = () => {
            if (this.state.isOpen) { this.setState({ isOpen: false }) }
        }

        if (this.props.children && this.props.children.forEach) {
            this.props.children.forEach((child) => {
                if ((child.include.indexOf("main") < 0 && child.include.length) || child.exclude.indexOf("main") > -1) { return; }
                let clickFoo = closeOnClick;
                if (child.url.substr(0, 7) === 'mailto:') {
                    clickFoo = e => {
                        window.location = child.url;
                        e.preventDefault();
                        closeOnClick();
                    }
                }
                items.push(
                    <NavItem key={'mainNavItem' + child.id}  >
                        <NavLink to={child.url} onClick={clickFoo} active={child.url === this.props.url || undefined} className="nav-link px-3 px-sm-2 rounded-sm" >{child.text}</NavLink>
                    </NavItem>
                );
            });
        }


        return (
            <div className="navbar-wrap sticky-top">
                <Container fluid="xl" className="p-0">
                    <Navbar dark expand="sm" className="pb-0">
                        <NavbarBrand href="/" className="text-hide main-logo pb-3">
                            {this.props.siteName}
                            <img src={"/images/design/rm_logo_2020_refined_dev_white_hz_2.svg"} alt="rm logo" style={{ opacity: .94, width: 170 }} />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} style={{ fontSize: 13, padding: 4 }} />
                        <Collapse isOpen={this.state.isOpen} navbar className="flex-grow-0 ml-auto mt-1 mt-md-0" id="mainNavLinks" >
                            <Nav className="flex-column flex-sm-row mx-n3 mx-sm-0" navbar>
                                {items}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default MainNav;