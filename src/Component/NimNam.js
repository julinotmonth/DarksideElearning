import { Col, Row } from "react-bootstrap";
import personal from '../Aset/personal.png'
import { Link } from "react-router-dom";

function NimNam (props) {
    const { nim } = props
    const { username } = props
    return (
        <>
            <div className="wadah_NimNam">
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Link>
                            <img className="personalJumbo" src={personal} />
                        </Link>
                        <h1 className="nama_nim">{nim} {username}</h1>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xl={10} lg={12} md={12} sm={12} xs={12}>
                    <div className="WarnaWarni"></div>
                </Col>
            </Row>
        </>
    );
}

export default NimNam;