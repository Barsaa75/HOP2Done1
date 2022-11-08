import { useContext } from "react";
import { darkModeContext } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = () => {
  const { isDarkMode } = useContext(darkModeContext);

  const body = {
    body: {
      height: "100vh",
      width: "100vw",
      backgroundColor: isDarkMode ? "gray" : "white",
      color: isDarkMode ? "white" : "black",
    },
  };
  return (
    <div style={body.body}>
      <div className="vlog">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Container className="w-100 ">
            <Row className="mt-5">
              <div
                className="title"
                style={{ fontSize: "48px", fontWeight: "800" }}
              >
                Blog posts
              </div>
              <div
                className="miniTitle text-muted"
                style={{
                  fontSize: "18px",
                  lineHeight: "29px",
                  fontWeight: "600",
                }}
              >
                Our latest updates and blogs about managing your team
              </div>
            </Row>
            <Row>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Products;
