import { Col, Row } from "react-bootstrap";
import { AiOutlineQrcode } from "react-icons/ai";
import { Link } from "react-router-dom";

function FormEnroll (props) {
    const { enrolcode } = props;
    const { enroll } = props
    return (
            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="wadah_enroll">
                        <Row>
                            <Col className="border_top_enroll" xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Link className="link_qr">
                                    <div className="wadah_qr">
                                        <AiOutlineQrcode className="icon_qr" />
                                    </div>
                                </Link>
                                <input className="input_enroll" placeholder={enrolcode} />
                                <button className="button_enroll">{enroll}</button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        
    );
}

export default FormEnroll;