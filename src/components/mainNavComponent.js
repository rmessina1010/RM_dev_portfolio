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
        if (this.props.children && this.props.children.forEach) {
            this.props.children.forEach((child) => {
                if ((child.include.indexOf("main") < 0 && child.include.length) || child.exclude.indexOf("main") > -1) { return; }
                let mailFoo = null;
                if (child.url.substr(0, 7) === 'mailto:') {
                    mailFoo = e => {
                        window.location = child.url;
                        e.preventDefault();
                    }
                }
                items.push(
                    <NavItem key={'mainNavItem' + child.id}  >
                        <NavLink to={child.url} onClick={mailFoo} active={child.url === this.props.url} className="nav-link px-3 px-sm-2 rounded-sm" >{child.text}</NavLink>
                    </NavItem>
                );
            });
        }
        const toggle = () => this.setState({ isOpen: !this.state.isOpen });

        return (
            <div className="navbar-wrap sticky-top">
                <Container fluid="xl" className="p-0">
                    <Navbar dark expand="sm" className="pb-0">
                        <NavbarBrand href="/" className="text-hide main-logo pb-3">
                            {this.props.siteName}
                            <img src={"/RM LOGO 2020 REFINED_DEV white hz 2.svg"} alt="rm logo" style={{ opacity: .94, width: 170 }} />
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