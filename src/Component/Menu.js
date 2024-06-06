import { Col, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import panduan from "../Aset/panduan.jpg"
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import panduanakses from "../Aset/panduanakses.jpg"
import Video from "../Aset/Video.mp4"
 
function Menu (props) {
    const { dashboard } = props
    const { calendar } = props
    const { badges } = props
    const { courses } = props
    return (
        <Row>
            <Col className="" xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="wadah_menu_my">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Row>
                                <Col className="column_rumah" xl={6} lg={6} md={6} sm={6} xs={12}>
                                    <div className="wadah_rumah  margin_right_1">
                                        <Link className="link_icon_rumah">
                                            <FaHome className="icon_rumah" />
                                            <span className="deskripsi_dash">{dashboard}</span>
                                        </Link>
                                     </div>
                                     <div className="wadah_rumah  margin_right_2">
                                        <Link className="link_icon_rumah">
                                            <FaRegCalendarDays  className="icon_rumah" />
                                            <span className="deskripsi_dash">{calendar}</span>
                                        </Link>
                                     </div>
                                </Col>
                                <Col className="column_rumah2 margin_top2" xl={6} lg={6} md={6} sm={6} xs={12}>
                                     <div className="wadah_rumah  margin_right_3">
                                        <Link className="link_icon_rumah">
                                            <FaBookmark className="icon_rumah" />
                                            <span className="deskripsi_dash">{badges}</span>
                                        </Link>
                                     </div>
                                     <div className="wadah_rumah">
                                        <Link className="link_icon_rumah">
                                            <FaBook className="icon_rumah" />
                                            <span className="deskripsi_dash">{courses}</span>
                                        </Link>
                                     </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="margin_top3" xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Link>
                                <img className="foto_panduan" src={panduan} />
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="panduan_mhs">Panduan E-Learning untuk Mahasiswa</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="mrgin_top mrgin_bottom">
                                <div className="wadah_video">
                                <Player
                                    playsInline
                                    poster={panduanakses}
                                    src={Video}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default Menu;