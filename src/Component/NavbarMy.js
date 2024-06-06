import { Col, DropdownDivider, Nav, NavDropdown, Row } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState, useTransition } from "react";
import { FaBell } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import personal from '../Aset/personal.png'
import { FaTachometerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";



function NavbarMy (props) {
    const [open, setOpen] = useState(false);

    const { nim } = props;
    const { username } = props;
    const { setLanguage } = props;
    const { setDeskripsi_1 } = props;
    const { setDeskripsi_2 } = props;
    const { setDeskripsi_3 } = props;
    const { setDeskripsi_4 } = props;
    const { setDeskripsi_5 } = props;
    const { setDeskripsi_6 } = props;
    const { setFirstname } = props;
    const { setLastname } = props;
    const { setEmail } = props;
    const { setDaftaras } = props;
    const { setNim } = props;
    const { setPrograms } = props;
    const { setRegspada } = props;
    const { setEnrolcode } = props;
    const { setEnroll } = props;
    const { setCalendar } = props;
    const { setBadges } = props;
    const { setallCourses } = props;
    const { setDashboard } = props;

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(t("formspada"));
    localStorage.setItem('formspada', t("formspada"))
    setDeskripsi_1(t("deskripsi_1"));
    localStorage.setItem('deskripsi_1', t("deskripsi_1"))
    setDeskripsi_2(t("deskripsi_2"));
    localStorage.setItem('deskripsi_2', t("deskripsi_2"))
    setDeskripsi_3(t("deskripsi_3"));
    localStorage.setItem('deskripsi_3', t("deskripsi_3"))
    setDeskripsi_4(t("deskripsi_4"));
    localStorage.setItem('deskripsi_4', t("deskripsi_4"))
    setDeskripsi_5(t("deskripsi_5"));
    localStorage.setItem('deskripsi_5', t("deskripsi_5"))
    setDeskripsi_6(t("deskripsi_6"));
    localStorage.setItem('deskripsi_6', t("deskripsi_6"))
    setFirstname(t("firstname"));
    localStorage.setItem('firstname', t("firstname"))
    setLastname(t("lastname"));
    localStorage.setItem('lastname', t("lastname"))
    setEmail(t("email"));
    localStorage.setItem('email', t("email"))
    setDaftaras(t("daftaras"));
    localStorage.setItem('daftaras', t("daftaras"))
    setNim(t("nim"));
    localStorage.setItem('nim', t("nim"))
    setPrograms(t("programs"));
    localStorage.setItem('programs', t("programs"))
    setRegspada(t("regspada"));
    localStorage.setItem('regspada', t("regspada"))
    setEnrolcode(t("enrolcode"));
    localStorage.setItem('enrolcode', t("enrolcode"))
    setEnroll(t("enroll"));
    localStorage.setItem('enroll', t("enroll"))
    setCalendar(t("calendar"));
    localStorage.setItem('calendar', t("calendar"))
    setBadges(t("badges"));
    localStorage.setItem('badges', t("badges"))
    setallCourses(t("allcourses"));
    localStorage.setItem('allcourses', t("allcourses"))
    setDashboard(t("dashboard"));
    localStorage.setItem('dashboard', t("dashboard"))
    };

    return (
        <>
            <div className="wadah_navbar">
                <div className="wadah_navbarr">
                    <Row>
                        <Col xl={6} lg={6} md={2} sm={2} xs={2}>
                            <div className="navbarrr">
                                <div className="wadah_hamburger" onClick={()=>{setOpen(!open)}}>
                                    <GiHamburgerMenu className="hamburger" />
                                </div>
                                <div className="wadah_link_umsidaa">
                                    <Link className="link_elearning_umsida">E-Learning UMSIDA</Link>
                                </div>
                                <Nav className="wadah_dropdown">
                                    <NavDropdown 
                                    id="nav-dropdown-dark-example"
                                    title={t('courses')}
                                    menuVariant="light">
                                            <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">TECHNOPRENEURSHIP 7/A3 [INF]</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">PEMROGRAMAN BERBASIS WEB 3/A3 [INF]</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">KEWARGANEGARAAN 3/A1 [INF]</NavDropdown.Item>  
                                            <NavDropdown.Item href="#action/3.4">PEMROGRAMAN BERBASIS WEB 3/A1 [INF]</NavDropdown.Item> 
                                            <NavDropdown.Item href="#action/3.4">SISTEM OPERASI 3/A1 [INF]</NavDropdown.Item> 
                                            <NavDropdown.Item href="#action/3.4">TEORI BAHASA DAN AUTOMATA 3/A1 [INF]</NavDropdown.Item> 
                                            <NavDropdown.Item href="#action/3.4">KEMUHAMMMADIYAHAN 3/A3 [INF]</NavDropdown.Item> 
                                            <NavDropdown.Item href="#action/3.4">ALJABAR LINEAR 3/A2 [INF]</NavDropdown.Item>  
                                            <NavDropdown.Item href="#action/3.4">AKUNTANSI A/A1 [INF]</NavDropdown.Item> 
                                            <NavDropdown.Item href="#action/3.4">ALJABAR LINEAR 3/A1 [INF]</NavDropdown.Item> 
                                            <NavDropdown.Item href="#action/3.4">TECHNOPRENEURSHIP 7/A1 [INF]</NavDropdown.Item> 
                                    </NavDropdown>
                                </Nav>
                                <Nav className="wadah_dropdownn">
                                    <NavDropdown 
                                    id="nav-dropdown-dark-example"
                                    title={t('language')}
                                    menuVariant="light">
                                            <NavDropdown.Item onClick={() => changeLanguage('en')}>English (en)</NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => changeLanguage('id')}>Indonesian ‎(id)‎</NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => changeLanguage('ar')}>عربي ‎(ar)‎</NavDropdown.Item>    
                                    </NavDropdown>
                                </Nav>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={10} sm={10} xs={10}>
                            <div className="navbar_two">
                                <FaBell className="lonceng" />
                                <IoChatbox className="chat" />
                                <Nav className="wadah_dropdownnn">
                                    <NavDropdown 
                                    align="end"
                                    id="nav-dropdown-dark-example"
                                    title={
                                    <>
                                    <span className="nama_anda">{nim} {username}</span>
                                    <img style={{borderRadius: '0.25rem', marginRight: '17px'}} src={personal} />
                                    </>
                                    }
                                    menuVariant="light">
                                            <NavDropdown.Item> <FaTachometerAlt style={{verticalAlign: '-8%', marginRight: '0.8rem', fontSize: '16px'}} />{t('dashboard')}</NavDropdown.Item>
                                            <DropdownDivider />
                                            <NavDropdown.Item> <FaUser style={{verticalAlign: '-8%', marginRight: '0.8rem', fontSize: '16px'}} />{t('profile')}</NavDropdown.Item>
                                            <NavDropdown.Item> <FaTableCells style={{verticalAlign: '-8%', marginRight: '0.8rem', fontSize: '16px'}} />{t('grades')}</NavDropdown.Item>
                                            <NavDropdown.Item> <FaComment style={{verticalAlign: '-8%', marginRight: '0.8rem', fontSize: '16px'}} />{t('messages')}</NavDropdown.Item>
                                            <NavDropdown.Item> <FaWrench style={{verticalAlign: '-8%', marginRight: '0.6rem', fontSize: '16px'}} />{t('preferences')}</NavDropdown.Item>
                                            <DropdownDivider />
                                            <NavDropdown.Item> <FaSignOutAlt style={{verticalAlign: '-8%', marginRight: '0.8rem', fontSize: '16px'}} />{t('logout')}</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
                  <div className={`wadah_always ${open? 'active' : ''}`}>
                            <div className="wadah_menu">
                            <Link className="underline_link" to="/">
                                    <div className="wadah_base">
                                        <div className="onelaner">
                                        <FaTachometerAlt  className="homebois" />
                                        <span className="base">Dashboard</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="underline_link" to="/">
                                    <div className="wadah_dasboard_white">
                                        <div className="onelaner">
                                        <FaHome className="homebois" />
                                        <span className="base">Home</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="underline_link" to="/">
                                    <div className="wadah_dasboard_white">
                                        <div className="onelaner">
                                        <FaCalendarAlt  className="homebois" />
                                        <span className="base">Calendar</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="underline_link" to="/">
                                    <div className="wadah_dasboard_white">
                                        <div className="onelaner">
                                        <FaFile className="homebois" />
                                        <span className="base">Private files</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="underline_link" to="/">
                                    <div className="wadah_dasboard_white">
                                        <div className="onelaner">
                                        <FaGraduationCap className="cap_gradion" />
                                        <span className="base">My courses</span>
                                        </div>
                                    </div>
                                </Link>
                         </div>
                    </div>
        </>
    );
}

export default NavbarMy;