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
      <Row className="p-0 m-0">
        <HomeNavBar />
      </Row>
      <Row
        className="main m-0 p-0 mw-100 d-flex justify-content-center align-items-center"
        style={{
          height: "90vh",
        }}
      >
        <Col className="col-11 col-lg-6 col-xl-5">
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
          <Row className="col-11 d-grid gap-4 mt-5">
            <Link
              to="./feature1"
              className="p-0 m-0"
              style={{ textDecoration: "none" }}
            >
              <Button
                className="border-0 m-0 d-flex align-items-center gap-0 gap-sm-2 gap-lg-3 w-100 ps-4 py-3"
                style={{
                  backgroundColor: "#00ADC6",
                  transition: "background-color 0.3s ease",
                  "&:hover": { backgroundColor: "#393E46" },
                }}
              >
                <MdOutlineAccountCircle
                  style={{
                    fontSize: "50px",
                  }}
                />
                <div style={{ fontSize: "22.4px" }}>
                  So sánh với 1 đối tượng
                </div>
              </Button>
            </Link>
            <Link
              to="./feature2"
              className="p-0 m-0"
              style={{ textDecoration: "none" }}
            >
              <Button
                className="border-0 m-0 d-flex align-items-center gap-0 gap-sm-2 gap-lg-3 w-100 ps-4 py-3"
                style={{
                  backgroundColor: "#00ADC6",
                  transition: "background-color 0.3s ease",
                  "&:hover": { backgroundColor: "#393E46" },
                }}
              >
                <MdOutlineGroups
                  style={{
                    fontSize: "50px",
                  }}
                />
                <div style={{ fontSize: "22.4px" }}>
                  So sánh với nhiều đối tượng
                </div>
              </Button>
            </Link>
          </Row>
        </Col>
        <Col className="col-5 m-0 p-0 d-none d-lg-block">
          <Image
            className="m-0 p-0"
            style={{ width: "90%", height: "90%" }}
            src="/images/facial-recognition.jpg"
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
