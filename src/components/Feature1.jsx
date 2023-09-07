import React, { useState } from "react";
import { FunctionNavBar } from "./NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ProcessButton from "./LoadingButton";
import { MdOutlineChangeCircle } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";

import "./Feature1.css";

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
      className="mx-5 mb-2 border border-1 border-dark w-400 h-100"
      style={{
        minHeight: "18em",
        maxHeight: "18em",
        minWidth: "30em",
        maxHeight: "30em",
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
                maxWidth: "26em",
                maxHeight: "15em",
              }}
            />
            <MdOutlineChangeCircle
              style={{ fontSize: "30px", color: "#00ADC6", cursor: "pointer" }}
              onClick={handleUploadClick}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

function Feature1() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Change = (file) => {
    setFile1(file);
  };

  const handleFile2Change = (file) => {
    setFile2(file);
  };

  return (
    <Container className="mw-100 p-0 m-0">
      <Row>
        <FunctionNavBar />
      </Row>

      <Row
        className="p-0 m-0"
        style={{
          backgroundColor: "#1C1B1F",
          minHeight: "calc(100vh - 5.4rem)",
        }}
      >
        <Col className="d-flex flex-column justify-content-center align-items-center p-0 m-0">
          <Row className="mb-5 w-100">
            <h2
              style={{
                fontFamily: "inter",
                fontWeight: "600",
                fontSize: "50px",
                color: "#00ADB5",
                padding: "0rem 0 0 6.9rem",
              }}
            >
              So sánh với 1 đối tượng
            </h2>
          </Row>
          <Row className="">
            <Col>
              <UploadCard
                text="Tải lên ảnh kiểm tra"
                onFileChange={handleFile1Change}
              />
            </Col>
            <Col>
              <UploadCard
                text="Tải lên ảnh đối chiếu"
                onFileChange={handleFile2Change}
              />
            </Col>
          </Row>
          <Row className="mt-5 mb-0">
            <ProcessButton image1={file1} image2={file2} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Feature1;
