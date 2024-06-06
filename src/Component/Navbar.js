import { Col, Nav, NavDropdown, Row } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

function Navbar () {
    const [open, setOpen] = useState(false);

    return(
        <>
            <div className="wadah_navbar">
                <div className="wadah_navbarr">
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={3} xs={3}>
                            <div className="navbarr">
                                <div className="wadah_hamburger" onClick={()=>{setOpen(!open)}}>
                                    <GiHamburgerMenu className="hamburger" />
                                </div>
                                <div className="wadah_link_umsida">
                                    <Link className="link_elearning_umsida">E-Learning UMSIDA</Link>
                                </div>
                                <Nav className="wadah_dropdown">
                                    <NavDropdown 
                                    id="nav-dropdown-dark-example"
                                    title="English (en) "
                                    menuVariant="light">
                                            <NavDropdown.Item href="#action/3.1">English (en)</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Indonesian ‎(id)‎</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">عربي ‎(ar)‎</NavDropdown.Item>    
                                    </NavDropdown>
                                </Nav>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={9} xs={9}>
                            <div className="navbar_twoo">
                                <span className="are_not_logged"> You are not logged in. (<Link className="color_login" to="/login">Log in</Link>)</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
                  <div className={`wadah_always ${open? 'active' : ''}`}>
                            <div className="wadah_menu">
                                <div className="wadah_base">
                                    <div className="onelaner">
                                    <FaHome className="homebois" />
                                    <span className="base">Home</span>
                                </div>
                            </div>
                         </div>
                    </div>
        </>
    );
}

export default Navbar;