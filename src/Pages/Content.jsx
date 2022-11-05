import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = ({ title, text, placeholder, button, type }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="bg">
              <div className="content">
                <div className="title">{title}</div>
                <div className="text">{text}</div>
                <div className="inputContainer">
                  <input
                    type={type}
                    className="input"
                    placeholder={placeholder}
                  />
                  <button className="button">{button}</button>
                </div>
              </div>
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <div style={{ margin: 1000 }}></div>
      </Container>
    </div>
  );
};

export default Content;
