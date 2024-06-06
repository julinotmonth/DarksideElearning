import { Col, Row } from "react-bootstrap";
import { FaFolder } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FooterLobby from "./FooterLobby";

function Categories () {
    return (
        <>
        <div className="wadah_categories">
            <Row className="row_one_folder">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <h2 className="categories">Course categories</h2>
                </Col>
            </Row>
            <Row>
                <Col className="wadah_folder" xl={3} lg={3} md={6} sm={6} xs={6}>
                    <Link className="link_colorfolder">
                        <FaFolder className="folder_icon" />
                        <span className="judul_folder">RISET PENGEMBANGAN MODUL E-LEARNING (6)</span>
                    </Link>
                </Col>
                <Col className="wadah_folder" xl={3} lg={3} md={6} sm={6} xs={6}>
                    <Link className="link_colorfolder">
                        <FaFolder className="folder_icon" />
                        <span className="judul_folder">COURSE BIMBINGAN (3)</span>
                    </Link>
                </Col>
                <Col className="wadah_folder" xl={3} lg={3} md={6} sm={6} xs={6}>
                    <Link className="link_colorfolder">
                        <FaFolder className="folder_icon" />
                        <span className="judul_folder">FAKULTAS BISNIS, HUKUM DAN ILMU SOSIAL (0)</span>
                    </Link>
                </Col>
                <Col className="wadah_folder" xl={3} lg={3} md={6} sm={6} xs={6}>
                    <Link className="link_colorfolder">
                        <FaFolder className="folder_icon" />
                        <span className="judul_folder">FAKULTAS AGAMA ISLAM (0)</span>
                    </Link>
                </Col>
            </Row>
            <Row className="row_two_folder">
                <Col className="wadah_folder" xl={3} lg={3} md={6} sm={6} xs={6}>
                    <Link className="link_colorfolder">
                        <FaFolder className="folder_icon" />
                        <span className="judul_folder">FAKULTAS SAINS DAN TEKNOLOGI (0)</span>
                    </Link>
                </Col>
                <Col className="wadah_folder" xl={3} lg={3} md={6} sm={6} xs={6}>
                    <Link className="link_colorfolder">
                        <FaFolder className="folder_icon" />
                        <span className="judul_folder">FAKULTAS ILMU KESEHATAN (0)</span>
                    </Link>
                </Col>
                <Col className="wadah_folder" xl={3} lg={3} md={6} sm={6} xs={6}>
                    <Link className="link_colorfolder">
                        <FaFolder className="folder_icon" />
                        <span className="judul_folder">FAKULTAS PSIKOLOGI DAN ILMU PENDIDIKAN (1)</span>
                    </Link>
                </Col>
                <Col className="wadah_folder" xl={3} lg={3} md={6} sm={6} xs={6}>
                    <Link className="link_colorfolder">
                        <FaFolder className="folder_icon" />
                        <span className="judul_folder">PROGRAM STUDI KEDOKTERAN GIGI (0)</span>
                    </Link>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default Categories;