import React from "react";
import HomeNavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Home.css";

export function HomePage() {
  return (
    <Container className="p-0 m-0 mw-100">
      <Col>
        <Row>
          <HomeNavBar />
        </Row>
        <Row className="main m-0 mw-100 d-flex justify-content-between align-items-center">
          <Col style={{ marginLeft: "6.3rem" }} xs={5}>
            <Row className="pb-1.5">
              <h1
                style={{
                  fontWeight: "semiBold",
                  fontSize: "54.69px",
                  color: "#00ADB5",
                  paddingTop: "0px",
                }}
              >
                {" "}
                Hệ thống nhận diện gương mặt
              </h1>
              <p
                style={{
                  fontSize: "22.4px",
                  color: "#EEEEEE",
                  marginTop: "15px",
                }}
              >
                Tải lên các bức ảnh gương mặt và xác định độ trùng khớp
              </p>
            </Row>
            <Row className="sm-5 d-grid gap-2 mt-5">
              <Link to="./feature1" className="p-0 m-0">
                <Button
                  size="lg"
                  className="custom-button border-0"
                  style={{
                    backgroundColor: "#00ADC6",
                    transition: "background-color 0.3s ease",
                    "&:hover": { backgroundColor: "#393E46" },
                  }}
                >
                  <div
                    className="mw-100"
                    style={{ textAlign: "left", padding: "0px 50px" }}
                  >
                    <MdOutlineAccountCircle
                      style={{
                        marginRight: "30px",
                        height: "50px",
                        fontSize: "50px",
                        marginBottom: "5px",
                      }}
                    />
                    So sánh với 1 đối tượng
                  </div>
                </Button>
              </Link>
              <Link to="./feature2" className="p-0 m-0">
                <Button
                  size="lg"
                  className="custom-button"
                  style={{ backgroundColor: "#00ADC6", border: "0px" }}
                >
                  <div
                    style={{
                      width: "554.4px",
                      textAlign: "left",
                      padding: "0px 50px",
                    }}
                  >
                    <MdOutlineGroups
                      style={{
                        marginRight: "30px",
                        height: "50px",
                        fontSize: "50px",
                        marginBottom: "5px",
                      }}
                    />
                    So sánh với nhiều đối tượng
                  </div>
                </Button>
              </Link>
            </Row>
          </Col>
          <Col className="m-0 p-0 d-none d-xl-block" xl={6}>
            <Image
              className="m-0 p-0"
              height="455rem"
              src="/images/facial-recognition.jpg"
              rounded
            />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default HomePage;
