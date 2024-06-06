import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgcourses from "../Aset/imgcourses.jpg"

function CoursesRecently () {
    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="wadah_courses_recently">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="panduan_mhs">Recently accessed courses</h5>
                        </Col>
                    </Row>
                    <div className="wadah_courses_recentlyy">
                    <Row className="roww">
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently pddingright_md">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                        TECHNOPRENEURSHIP 7/A3 [INF]
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently padding_right padding_left">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                            PEMROGRAMAN BERBASIS WEB 3/A3 [INF]                 
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently pdding_right pddingleft_md">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                        KEWARGANEGARAAN 3/A1 [INF]              
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently padding_left pddingright_md pddingleft_md">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                        PEMROGRAMAN BERBASIS WEB 3/A1 [INF]               
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently padding_right padding_left pddingright_md">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                        SISTEM OPERASI 3/A1 [INF]             
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently padding_right pddingright_md">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                        TEORI BAHASA DAN AUTOMATA 3/A1 [INF]              
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently padding_right pddingright_md">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                        KEMUHAMMADIYAHAN 3/A3 [INF]              
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently pddingright_md">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                        ALJABAR LINEAR 3/A2 [INF]              
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently padding_right padding_left pddingright_md">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                        AKUNTANSI 3/A1 [INF]              
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="wadah_image_recently pdding_right">
                                <Link>
                                    <img className="img_style" src={imgcourses} />
                                </Link>
                                <div className="deskripsi_recently">
                                    <Link className="courses_one">
                                        ALJABAR LINEAR 3/A1 [INF]             
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default CoursesRecently;