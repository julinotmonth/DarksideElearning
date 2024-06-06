import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Card () {
    return (
        <div className="container_card">
            <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} xxl={12} className="col_card">
                        <h1>
                            <Link className="card_elearning">E-Learning UMSIDA</Link>
                        </h1>
                    </Col>
            </Row>
        </div>    
    );
}

export default Card;