import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

class Navigationbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="homepage" style={{ color: '#41035e' }}><strong>Ana Sayfa</strong></Nav.Link>
                            <Nav.Link href="yaprakbaskisi" style={{ color: '#41035e' }}>Yaprak Baskısı</Nav.Link>
                            <Nav.Link href="patatesbaskisi" style={{ color: '#41035e' }}>Patates Baskısı</Nav.Link>
                            <Nav.Link href="ipbaskisi" style={{ color: '#41035e' }}>İp Baskısı</Nav.Link>
                            <Nav.Link href="tasbaskisi" style={{ color: '#41035e' }}>Taş Baskısı</Nav.Link>
                            <Nav.Link href="agacbaskisi" style={{ color: '#41035e' }}>Ağaç Baskısı</Nav.Link>
                            <Nav.Link href="linolyumbaskisi" style={{ color: '#41035e' }}>Linolyum Baskısı</Nav.Link>
                            <Nav.Link href="guessgame" style={{ color: '#41035e' }}>Guess Game</Nav.Link>

                            <NavDropdown title="İletişim" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="https://www.instagram.com/" style={{ color: '#0065cd' }}>Instagram</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.linkedin.com/" style={{ color: '#0065cd' }}>Linkedin</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.gmail.com/" style={{ color: '#0065cd' }}>Send to email</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item style={{ color: '#0065cd' }}>+90 999 99 99</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Navigationbar;