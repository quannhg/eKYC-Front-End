import React from "react";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import "./Result1.css";

const ImageComponent = ({ image }) => {
  if (image && image instanceof Blob && image.type.startsWith("image/")) {
    try {
      const imageUrl = URL.createObjectURL(image);
      return (
        <Image
          className="border border-secondary border-2 rounded-1 p-2 bg-white"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          alt="reference image"
          src={imageUrl}
        />
      );
    } catch (error) {
      console.error("Error creating object URL:", error);
    }
  }

  return null;
};

function ResultConclusion({ faceDetected, isSame }) {
  if (faceDetected) {
    if (isSame) {
      return <Card.Text className="mt-3">2 ảnh là cùng một người</Card.Text>;
    } else {
      return <Card.Text className="mt-3">2 ảnh không là một người</Card.Text>;
    }
  } else {
    return <Card.Text className="mt-3">Không phát hiện gương mặt</Card.Text>;
  }
}

export default function Result1(props) {
  function roundToFourDecimalPlaces(number) {
    if (isNaN(number) || typeof number !== "number") {
      return NaN;
    }
    return parseFloat(number.toFixed(4));
  }

  function DistanceHandler({ isSame, faceDetected, distance }) {
    if (isSame) {
      return "Cùng một người";
    } else if (faceDetected === "success") {
      const distancePercentage =
        roundToFourDecimalPlaces(Number(distance)) * 100;
      return `${distancePercentage}%`;
    } else {
      return "Ảnh không phải là người";
    }
  }

  function getColor(distance, faceDetected, isSame) {
    if (isSame) return "#36B943";
    if (!faceDetected) {
      return "#EC4700";
    } else if (distance > 0.75) {
      return "#36B943";
    } else if (distance > 0.5) {
      return "#F4DB00";
    } else if (distance > 0.25) {
      return "#FF8A00";
    } else {
      return "#EC4700";
    }
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ fontFamily: "Inter" }}
    >
      <Modal.Body className="p-0">
        <Row className="m-0 d-flex flex-column justify-content-center flex-sm-row">
          <Col
            className="d-flex flex-column align-items-center justify-content-center p-0"
            sm="12"
            lg="8"
          >
            <Row
              className="flex-grow-1 border-bottom border-black w-100"
              style={{ color: "#00ADC6" }}
            >
              <Modal.Title className="d-flex justify-content-center align-items-center pt-2">
                <div className="h3">Độ trùng khớp</div>
              </Modal.Title>
            </Row>
            <Row className="result-detail w-100 flex-grow-1 d-flex align-items-center justify-content-center">
              <Col
                xl="5"
                lg="6"
                className="d-flex align-items-center justify-content-center"
              >
                <Card className="border border-0">
                  <div className="h4 ref-img-card d-flex flex-column justify-content-center align-items-center gap-2">
                    <div>Ảnh kiểm tra</div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: "14em",
                        width: "11em",
                      }}
                    >
                      <ImageComponent image={props.image1} />
                    </div>
                  </div>
                </Card>
              </Col>
              <Col
                xl="5"
                lg="6"
                className="h-100 d-flex align-items-center justify-content-center"
              >
                <Card className="border border-0" style={{ width: "85%" }}>
                  <div className="query-img-card d-flex flex-column gap-2">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: "20em",
                        width: "16em",
                      }}
                    >
                      <ImageComponent image={props.image2} />
                    </div>
                    <div
                      className="h5"
                      style={{
                        color: getColor(
                          Number(props.distance),
                          props.faceDetected === "success",
                          props.isSame
                        ),
                      }}
                    >
                      <DistanceHandler
                        distance={props.distance}
                        isSame={props.isSame}
                        faceDetected={props.faceDetected}
                      />
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col className="p-0 border border-secondary rounded-1" sm="8" lg="4">
            <div className="result-consult">
              <Card className="result-consult-card border border-secondary border-1">
                <Card.Header
                  className="border border-0 p-0 m-0"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="h5" style={{ color: "#00ADC6" }}>
                    Kết quả
                  </div>
                </Card.Header>
                {props.faceDetected === "success" && props.isSame ? (
                  <MdCheckCircleOutline
                    style={{ color: "#36B943", fontSize: "2em" }}
                  />
                ) : (
                  <AiOutlineCloseCircle
                    style={{ color: "#EC4700", fontSize: "2em" }}
                  />
                )}

                <ResultConclusion
                  faceDetected={props.faceDetected === "success" ? true : false}
                  isSame={props.isSame ? true : false}
                />
              </Card>

              <Card className="border border-secondary border-1 d-flex flex-column gap-4">
                <div className="d-flex justify-content-center align-items-center">
                  <FaRegCommentDots className="mb-2 me-2" />
                  <div className="h5" style={{ color: "#00ADC6" }}>
                    Nhận xét
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-around align-content-center">
                  <div
                    className="d-flex flex-column justify-content-center align-content-center gap-1"
                    style={{ color: "#36B943", cursor: "pointer" }}
                    onClick={props.onHide}
                  >
                    <BsHandThumbsUp
                      style={{
                        fontSize: "1.8em",
                      }}
                    />
                    <div className="">Đúng</div>
                  </div>

                  <div
                    className="d-flex flex-column justify-content-center align-content-center gap-1"
                    style={{ color: "#EC4700", cursor: "pointer" }}
                    onClick={props.onHide}
                  >
                    <BsHandThumbsDown
                      style={{
                        fontSize: "1.8em",
                      }}
                    />
                    <div className="">Sai</div>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
