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
                items.push(
                    <NavItem key={'mainNavItem' + child.id}  >
                        <NavLink to={child.url} active={child.url === this.props.url} className="nav-link" >{child.text}</NavLink>
                    </NavItem>
                );
            });
        }
        const toggle = () => this.setState({ isOpen: !this.state.isOpen });

        return (
            <div className="navbar-wrap sticky-top bg-info">
                <Container fluid="xl" className="p-0">
                    <Navbar dark expand="sm">
                        <NavbarBrand href="/" className="text-hide main-logo">
                            {this.props.siteName}
                            <img src={"/RMLOGO2020whiteHZ.svg"} alt="rm logo" style={{ opacity: .90, width: 165 }} />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} style={{ fontSize: 13, padding: 4 }} />
                        <Collapse isOpen={this.state.isOpen} navbar className="flex-grow-0 ml-auto" id="mainNavLinks" >
                            <Nav className="flex-column flex-sm-row " navbar>
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