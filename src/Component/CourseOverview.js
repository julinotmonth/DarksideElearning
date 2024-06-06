import { Col, Nav, NavDropdown, Row } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgcourses from "../Aset/imgcourses.jpg"
import { FaEllipsis } from "react-icons/fa6";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Kemuhamm from '../Aset/Kemuhamm.jpg'
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Sidebar from "./Sidebar";

function CourseOverview () {
    const now = 100;
    const now_2 = 12;
    const now_3 = 100;
    const now_4 = 100;
    const now_5 = 100;
    const now_6 = 0;
    const now_7 = 60;
    const now_8 = 100;
    const now_9 = 8;
    const now_10 = 100;
    const now_11 = 100;
    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="wadah_course_overview padding_bottom_container">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="panduan_mhs">Course overview</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text_align_left mrgin_bottom_button" xl={6} lg={6} md={6} sm={3} xs={2}>
                                <Nav className="wadah_dropdown_all" style={{textAlign: 'center'}}>
                                    <NavDropdown 
                                    id="nav-dropdown-dark-example"
                                    title={
                                    <>
                                        <FaFilter style={{marginRight: '5px', fontSize: '14px', verticalAlign: 'middle'}} />
                                        <span className="nama_anda_all">All</span>
                                    </>
                                    }
                                    className="NavDropdown_future"
                                    menuVariant="light">
                                            <NavDropdown.Item active href="#action/3.1">All</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">In progress</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">Future</NavDropdown.Item>    
                                            <NavDropdown.Item href="#action/3.4">Past</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">Starred</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">Hidden</NavDropdown.Item>                
                                    </NavDropdown>
                                </Nav>
                        </Col>
                        <Col className="text_align_right" xl={6} lg={6} md={6} sm={9} xs={10}>
                                <span className="sort_by">Sort by</span>
                                <Nav className="wadah_dropdown_all">
                                    <NavDropdown 
                                    id="nav-dropdown-dark-example"
                                    title={
                                    <>
                                        <span className="nama_anda_all">Course name</span>
                                    </>
                                    }
                                    className="NavDropdown_future"
                                    menuVariant="light">
                                            <NavDropdown.Item active href="#action/3.1">Course name</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Last accessed</NavDropdown.Item>                
                                    </NavDropdown>
                                </Nav>
                                <Nav className="wadah_dropdown_all" style={{marginLeft: '5px'}}>
                                    <NavDropdown 
                                    id="nav-dropdown-dark-example"
                                    title={
                                    <>
                                        <FaTh style={{marginRight: '5px', fontSize: '14px', verticalAlign: 'middle'}} />
                                        <span className="nama_anda_all">Card</span>
                                    </>
                                    }
                                    className="NavDropdown_future"
                                    menuVariant="light">
                                            <NavDropdown.Item active href="#action/3.1">Card</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">List</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">Summary</NavDropdown.Item>                  
                                    </NavDropdown>
                                </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww pddingright_md">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={8} lg={8} md={8} sm={8} xs={8}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">AKUNTANSI 3/A1 [INF]</span>
                                                </Link>
                                            </Col>
                                            <Col className="text_align_right" xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now} />
                                                    <span className="deskripsi_progres"><b>{now}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww padding_right padding_left">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={9} lg={9} md={9} sm={9} xs={9}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">ALJABAR LINEAR 3/A1 [INF]</span>
                                                </Link>
                                            </Col>
                                            <Col className="text_align_right" xl={3} lg={3} md={3} sm={3} xs={3}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_2} />
                                                    <span className="deskripsi_progres"><b>{now_2}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww pddingright_md">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={9} lg={9} md={9} sm={9} xs={9}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">ALJABAR LINEAR 3/A2 [INF]</span>
                                                </Link>
                                            </Col>
                                            <Col className="text_align_right" xl={3} lg={3} md={3} sm={3} xs={3}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_3} />
                                                    <span className="deskripsi_progres"><b>{now_3}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww">
                                    <Link>
                                        <img src={Kemuhamm}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={9} lg={9} md={9} sm={9} xs={9}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">KEMUHAMMADIYAHAN 3/A3 [INF]</span>
                                                </Link>
                                                <span style={{visibility: 'hidden', display: 'block'}}>K</span>
                                            </Col>
                                            <Col className="text_align_right" xl={3} lg={3} md={3} sm={3} xs={3}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_4} />
                                                    <span className="deskripsi_progres"><b>{now_4}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww padding_right padding_left pddingright_md">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={10} lg={10} md={10} sm={10} xs={10}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">KEWARGANEGARAAN 3/A1 [INF]</span>
                                                </Link>
                                                <span style={{visibility: 'hidden', display: 'block'}}>K</span>
                                            </Col>
                                            <Col className="text_align_right" xl={2} lg={2} md={2} sm={2} xs={2}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_3} />
                                                    <span className="deskripsi_progres"><b>{now_3}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={10} lg={10} md={10} sm={10} xs={10}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">PEMROGRAMAN BERBASIS WEB 3/A1 [INF]</span>
                                                </Link>
                                            </Col>
                                            <Col className="text_align_right" xl={2} lg={2} md={2} sm={2} xs={2}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_6} />
                                                    <span className="deskripsi_progres"><b>{now_6}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww pddingright_md">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={9} lg={9} md={9} sm={9} xs={9}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">PEMROGRAMAN BERBASIS WEB 3/A3 [INF]</span>
                                                </Link>
                                            </Col>
                                            <Col className="text_align_right" xl={3} lg={3} md={3} sm={3} xs={3}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_7} />
                                                    <span className="deskripsi_progres"><b>{now_7}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww padding_right padding_left">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={10} lg={10} md={10} sm={10} xs={10}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">SISTEM OPERASI 3/A1 [INF]</span>
                                                </Link>
                                                <span style={{visibility: 'hidden', display: 'block'}}>K</span>
                                            </Col>
                                            <Col className="text_align_right" xl={2} lg={2} md={2} sm={2} xs={2}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_8} />
                                                    <span className="deskripsi_progres"><b>{now_8}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww pddingright_md">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={10} lg={10} md={10} sm={10} xs={10}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">TECHNOPRENEURSHIP 7/A1 [INF]</span>
                                                </Link>
                                                <span style={{visibility: 'hidden', display: 'block'}}>K</span>
                                            </Col>
                                            <Col className="text_align_right" xl={2} lg={2} md={2} sm={2} xs={2}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_9} />
                                                    <span className="deskripsi_progres"><b>{now_9}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={10} lg={10} md={10} sm={10} xs={10}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">TECHNOPRENEURSHIP 7/A3 [INF]</span>
                                                </Link>
                                                <span style={{visibility: 'hidden', display: 'block'}}>K</span>
                                            </Col>
                                            <Col className="text_align_right" xl={2} lg={2} md={2} sm={2} xs={2}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_10} />
                                                    <span className="deskripsi_progres"><b>{now_10}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                              <div className="wadah_course_overvieww padding_right padding_left pddingright_md">
                                    <Link>
                                        <img src={imgcourses}className="img_courses" />
                                    </Link>
                                    <div className="wadah_deskripsi_courses">
                                        <Row>
                                            <Col className="text_align_left" xl={10} lg={10} md={10} sm={10} xs={10}>
                                                <Link className="link_deskripsi_courses">
                                                    <span className="deskripsi_courses">TEORI BAHASA DAN AUTOMATA 3/A1 [INF]</span>
                                                </Link>
                                            </Col>
                                            <Col className="text_align_right" xl={2} lg={2} md={2} sm={2} xs={2}>
                                                <Nav className="arrow_in_point">
                                                    <NavDropdown
                                                    id="nav-dropdown-dark-example"
                                                    title={
                                                        <>
                                                            <div className="wadah_icon_titik_tiga">
                                                                <FaEllipsis className="icon_titik_tiga" />
                                                            </div>
                                                        </>
                                                    }
                                                    menuVariant="ligth"
                                                    >
                                                        <NavDropdown.Item href="#action/3.1"><FaStar style={{verticalAlign: '-5%', marginRight: '5px', color: '#44719C'}} />Star this course</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2"><FaEye style={{verticalAlign: '-7%', marginRight: '5px', color: '#000'}} />Hide from view</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav> 
                                            </Col>
                                        </Row>
                                        <Row className="padding_courses">
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <div className="wadah_progres">
                                                    <ProgressBar now={now_11} />
                                                    <span className="deskripsi_progres"><b>{now_11}%</b> Complete</span>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </div>      
                              </div>       
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="wadah_count_show">
                                <span className="content_show">Show</span>
                                <Nav className="wadah_dropdown_all">
                                    <NavDropdown 
                                    id="nav-dropdown-dark-example"
                                    title={
                                    <>
                                        <span className="nama_anda_all">12</span>
                                    </>
                                    }
                                    className="NavDropdown_future"
                                    menuVariant="light">
                                            <NavDropdown.Item active href="#action/3.1">12</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">24</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">48</NavDropdown.Item>                   
                                    </NavDropdown>
                                </Nav>
                            </div>                   
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default CourseOverview;