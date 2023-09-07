import React, { useState } from "react";
import { FunctionNavBar } from "./NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Feature1ProcessButton from "./Feature1ProcessButton";
import { MdOutlineChangeCircle } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";

import "./Feature1.css";

function ReferentUploadCard({ text, onFileChange }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile.type.split("/")[0] === "image" &&
      selectedFile.size <= 2 * 1024 * 1024
    ) {
      setFile(selectedFile);
      onFileChange(selectedFile);
    } else if (selectedFile.size > 2 * 1024 * 1024) {
      window.alert("File size exceeds 2MB limit");
    } else if (selectedFile.type.split("/")[0] !== "image") {
      window.alert("Selected file is not an image");
    }
  };

  const handleUploadClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", handleFileChange);
    input.click();
  };

  return (
    <Card
      className="border border-1 border-dark"
      style={{
        minHeight: "18em",
        borderInlineStyle: "dashed",
      }}
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        {!file && (
          <div
            onClick={handleUploadClick}
            className="d-flex justify-content-center align-items-center fs-4"
            style={{
              color: "#00ADC6",
              cursor: "pointer",
            }}
          >
            <MdOutlineAddBox className="me-2 mt-1 fs-3" />
            {text}
          </div>
        )}
        {file && (
          <div className="d-flex">
            <img
              id="image-preview"
              src={file && URL.createObjectURL(file)}
              alt="uploaded file"
              style={{
                maxWidth: "100%",
                maxHeight: "17em",
              }}
            />
            <MdOutlineChangeCircle
              style={{ fontSize: "30px", color: "#00ADC6" }}
              onClick={handleUploadClick}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

function UploadCard({ text, onFileChange }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile.type.split("/")[0] === "image" &&
      selectedFile.size <= 2 * 1024 * 1024
    ) {
      setFile(selectedFile);
      onFileChange(selectedFile);
    } else if (selectedFile.size > 2 * 1024 * 1024) {
      window.alert("File size exceeds 2MB limit");
    } else if (selectedFile.type.split("/")[0] !== "image") {
      window.alert("Selected file is not an image");
    }
  };

  const handleUploadClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", handleFileChange);
    input.click();
  };

  return (
    <Card
      className="mx-5 mb-2 border border-1 border-dark"
      style={{
        minHeight: "18em",
        minWidth: "30em",
        borderInlineStyle: "dashed",
      }}
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        {!file && (
          <div
            onClick={handleUploadClick}
            className="d-flex justify-content-center align-items-center fs-4"
            style={{
              color: "#00ADC6",
              cursor: "pointer",
            }}
          >
            <MdOutlineAddBox className="me-2 mt-1 fs-3" />
            {text}
          </div>
        )}
        {file && (
          <div className="d-flex">
            <img
              id="image-preview"
              src={file && URL.createObjectURL(file)}
              alt="uploaded file"
              style={{
                maxWidth: "100%",
                maxHeight: "17em",
              }}
            />
            <MdOutlineChangeCircle
              style={{ fontSize: "30px", color: "#00ADC6" }}
              onClick={handleUploadClick}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

function Feature2() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Change = (file) => {
    setFile1(file);
  };

  const handleFile2Change = (file) => {
    setFile2(file);
  };

  const containerStyle = {
    backgroundColor: "#1C1B1F",
    minWidth: "100%",
    minHeight: "100vh", // Set a minimum height for the Container
    padding: "0px",
    display: "flex",
    flexDirection: "column",
  };

  const QueryImagesUploadBox = ({}) => {
    return (
      <div className="d-flex flex-column">
        <div className="h4 text-white" style={{ backgroundColor: "#00ADC6" }}>
          Ảnh đối chiếu
        </div>
        <div>
          <Row>
            <UploadCard />
            <UploadCard />
          </Row>
          <Row>
            <UploadCard />
            <UploadCard />
          </Row>
        </div>
      </div>
    );
  };

  return (
    <Container style={containerStyle}>
      <Row>
        <FunctionNavBar />
      </Row>
      <Row className="align-items-center" style={{ flexGrow: 1 }}>
        <Col
          xs={5}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Col xs={8} className="d-flex flex-column gap-4">
            <Row className="w-100 d-flex justify-content-center">
              <div
                className="h2"
                style={{
                  fontWeight: "semiBold",
                  color: "#00ADB5",
                  textAlign: "center", // Center the text horizontally
                }}
              >
                So sánh với nhóm đối tượng
              </div>
            </Row>
            <Row>
              <ReferentUploadCard
                text="Tải lên ảnh kiểm tra"
                onFileChange={handleFile1Change}
              />
            </Row>
            <Row className="">
              <Feature1ProcessButton image1={file1} image2={file2} />
            </Row>
          </Col>
        </Col>
        <Col xs={7}>
          <QueryImagesUploadBox />
        </Col>
      </Row>
    </Container>
  );
}

export default Feature2;
