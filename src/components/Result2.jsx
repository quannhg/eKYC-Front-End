import React from "react";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { MdCheckCircleOutline, MdArrowOutward } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import "./Result1.css";
import { Container } from "react-bootstrap";
import useScreenWidth from "./useScreenWidth";

function getColor(distance) {
  if (typeof distance !== "number") {
    return "#EC4700"; // Default color for non-numeric values
  } else if (distance > 0.75) {
    return "#36B943"; // Green color for distance > 0.75
  } else if (distance > 0.5) {
    return "#F4DB00"; // Yellow color for distance > 0.5
  } else if (distance > 0.25) {
    return "#FF8A00"; // Orange color for distance > 0.25
  } else {
    return "#EC4700"; // Default color for all other cases
  }
}

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

function ReferenceImageCard({ referenceImage }) {
  return (
    <Card className="border border-0 m-0">
      <div className="h4 ref-img-card p-1 p-lg-2 d-flex flex-column gap-1 gap-lg-2">
        <div className="text-center">Ảnh kiểm tra</div>
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <ImageComponent image={referenceImage} />
        </div>
      </div>
    </Card>
  );
}

function QueryImageCard({ queryImage, distance }) {
  if (queryImage)
    return (
      <Card className="border border-0" style={{ width: "85%" }}>
        <div className="query-img-card d-flex flex-column justify-content-center align-items-center gap-2">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              height: "100%",
              width: "100%",
              maxHeight:'18rem'
            }}
          >
            <ImageComponent image={queryImage} />
          </div>
          <div className="h5 text-center" style={{ color: getColor(distance) }}>
            {distance ? distance * 100 : "The image is not human"}
            {typeof distance === "number" ? "%" : ""}
          </div>
        </div>
      </Card>
    );
  else return null;
}

function QueryImagesResult({ queryImages }) {
  // Create an array of QueryImageCard components or null values
  const queryImageCards = queryImages.map((queryImage, index) => {
    // Check if queryImage[index] exists
    if (queryImage && queryImage.file) {
      return (
        <Col
          key={index}
          xs={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <QueryImageCard queryImage={queryImage.file} />
        </Col>
      );
    } else {
      return <Col key={index}>{null}</Col>;
    }
  });

  return (
    <Container className="p-0 m-0 h-100 d-flex flex-column justify-content-center align-items-center gap-2">
      <Row>{queryImageCards.slice(0, 2)}</Row>
      <Row>{queryImageCards.slice(2, 4)}</Row>
    </Container>
  );
}

function CompareResult({ isSame, onHide }) {
  return (
    <div
      className="result-consult p-3 d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 m-0 p-0 d-flex align-items-center">
        <div className="w-100 d-flex justify-content-end">
          <div
            className="d-flex flex-row align-items-center justify-content-center gap-3 border border-1 rounded-2 p-2"
            style={{
              backgroundColor: "#00A1B8",
              color: "#00171B40",
              opacity: 0.7,
              cursor: "pointer",
            }}
            onClick={onHide}
          >
            <div>Trở về</div>
            <MdArrowOutward
              style={{
                fontSize: "1.8em",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex-grow-1 w-100 d-flex gap-5 flex-column justify-content-around align-items-center">
        <div className="w-100 d-flex justify-center align-items-center pe-4">
          <Card className="w-100 d-flex flex-column justify-content-center align-items-center gap-3 p-4 result-consult-card border border-secondary border-1">
            <Card.Header
              className="border border-0 p-0 m-0"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="h5" style={{ color: "#00ADC6" }}>
                Kết quả
              </div>
            </Card.Header>
            {isSame ? (
              <MdCheckCircleOutline
                style={{ color: "#36B943", fontSize: "2em" }}
              />
            ) : (
              <AiOutlineCloseCircle
                style={{ color: "#EC4700", fontSize: "2em" }}
              />
            )}

            {isSame ? (
              <Card.Text className="mt-3">2 ảnh là cùng một người</Card.Text>
            ) : (
              <Card.Text className="mt-3">2 ảnh không là một người</Card.Text>
            )}
          </Card>
        </div>

        <div className="w-100 d-flex justify-center align-items-center pe-4">
          <Card className="w-100 border border-secondary border-1 d-flex flex-column gap-4 p-4">
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
                onClick={onHide}
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
                onClick={onHide}
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
      </div>
    </div>
  );
}

export default function Result2({
  show,
  onHide,
  referenceImage,
  queryImages,
  compareResult,
}) {
  const screenWidth = useScreenWidth();

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen="xxl-down"
      style={{ fontFamily: "Inter" }}
      dialogClassName={screenWidth < 1400 ? "" : "custom-modal"}
    >
      <Modal.Body className="p-0">
        <Row className="p-0 m-0">
          <Col
            xs={5}
            md={4}
            lg={3}
            className="p-0 d-flex flex-column justify-content-center align-items-center"
          >
            <Row className="w-100" style={{ color: "#00ADC6" }}>
              <Modal.Title className="d-flex justify-content-center align-items-center pt-2">
                <div className="h3">Độ trùng khớp</div>
              </Modal.Title>
            </Row>
            <Row className="result-detail w-100 d-flex align-items-center justify-content-center">
              <ReferenceImageCard referenceImage={referenceImage} />
            </Row>
          </Col>
          <Col xs={7} md={8} lg={6} className="p-0">
            <QueryImagesResult
              queryImages={queryImages}
              QueryImagesResult={"TODO: implement query result"}
            />
          </Col>
          <Col xs={12} lg={3} className="p-0">
            <CompareResult onHide={onHide} />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
