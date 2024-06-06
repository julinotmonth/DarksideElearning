import { Col, Nav, NavDropdown, Row } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import { Link } from "react-router-dom";
import activities from "../Aset/activities.svg";
import personal from "../Aset/personal.png"
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import { DateCalendar, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";



function Sidebar () {
    const date = { text: new Date };

    const year = date.text.getFullYear();
    let month = date.text.getMonth() + 1; // Perlu ditambah 1 karena Januari dimulai dari 0
    let day = date.text.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate)
    return (
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="wadah_sidebar">
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}    >
                        <h5 className="header_timeline">Timeline</h5>
                    </Col>
                </Row>
                <div className="wadah_clock_and_sort">
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <Nav className="wadah_dropdown_all" style={{textAlign: 'center'}}>
                                        <NavDropdown 
                                        id="nav-dropdown-dark-example"
                                        title={
                                        <>
                                            <LuClock9 style={{marginRight: '5px', fontSize: '14px', verticalAlign: 'middle'}} />
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
                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className="align_right">
                                <Nav className="wadah_dropdown_all">
                                        <NavDropdown 
                                        id="nav-dropdown-dark-example"
                                        title={
                                        <>
                                            <FaFilter style={{marginRight: '5px', fontSize: '14px', verticalAlign: 'middle'}} />
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
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="wadah_all_content_activities">
                    <div className="wadah_content_activities">
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="wadah_link_and_content">
                                    <Link className="link_content_activities">
                                        <h4 className="content_activities">AKUNTANSI 3/A1 [INF]</h4>
                                    </Link>
                                </div>           
                            </Col>
                        </Row>
                    </div>
                    <div className="wadah_img_activities">
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <img className="img_activities mx-auto d-block" src={activities} />                  
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <span className="deskripsi_activities">No upcoming activities due</span>                 
                        </Col>
                    </Row>
                </div>
                <div className="wadah_all_content_activities">
                    <div className="wadah_content_activities">
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Link className="link_content_activities">
                                    <h4 className="content_activities">ALJABAR LINEAR 3/A1 [INF]</h4>
                                </Link>           
                            </Col>
                        </Row>
                    </div>
                    <div className="wadah_img_activities">
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <img className="img_activities mx-auto d-block" src={activities} />                  
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <span className="deskripsi_activities">No upcoming activities due</span>                 
                        </Col>
                    </Row>
                </div>
                <div className="wadah_all_button_courses">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="wadah_buton_courses">
                                <button className="button_more_courses mx-auto d-block">More courses</button>    
                            </div>            
                        </Col>
                    </Row>
                </div>
                <div className="wadah_header_private">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="header_private">Private files</h5>
                        </Col>
                    </Row>
                </div>
                <div className="wadah_all_nofile">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <span className="nofile_available">No files available</span>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Link className="link_manage_private">
                            <span className="manage_private">Manage private files...</span>
                        </Link>
                    </Col>
                </Row>
                <div className="wadah_all_online">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="header_private">Online users</h5>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <p className="content_online_users">2 online users (last 5 minutes)</p>                
                    </Col>
                </Row>
                <div className="wadah_all_nama_online">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Row>
                                <Col xl={12} lg={11} md={11} sm={11} xs={11}>
                                    <Link className="link_name_img">
                                        <img className="personal_img" src={personal} />      
                                        <span className="content_nama_personal">221080200025 AKHMAD JAZULI AL FARIS</span>
                                    </Link>
                                </Col>
                                <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                    <div className="wadah_icon_mata">
                                        <Link className="link_icon_eye">
                                            <FaEye />
                                        </Link>
                                    </div>         
                                </Col>
                            </Row>  
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h5 className="header_private">Latest badges</h5>            
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <p className="txt_badges">You have no badges to display</p>                        
                    </Col>
                </Row>
                <div className="wadah_all_calendar">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="header_private">Calendar</h5>                   
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <div className="date_picker">
                                <DatePicker defaultValue={dayjs(formattedDate)} />
                            </div>
                            <div className="date_calendar"> 
                                <DateCalendar /> 
                            </div>        
                        </LocalizationProvider>           
                    </Col>
                </Row>
                <div className="wadah_all_upcoming">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="header_private">Upcoming events</h5>                    
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <span className="txt_events">There are no upcoming events</span>                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link className="link_manage_private">
                            <span className="manage_private">Go to calendar...</span>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}

export default Sidebar;