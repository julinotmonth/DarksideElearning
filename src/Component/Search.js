import { Col, Row } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";

function Search () {
    return (
        <div className="container_search">
            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className="col-search">
                    <form>
                        <label htmlFor="input_search">Search courses</label>
                        <input type="text" name="input_search" id="input_search" className="input_search" />
                        <button className="button_go">Go</button>
                        <FaQuestionCircle title="icon sampah" className="question" />
                    </form>
                </Col>
            </Row>
        </div>
    );
}

export default Search;