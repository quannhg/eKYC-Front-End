import { FunctionNavBar } from "./NavBar";
import Feature2ProcessButton from "./Feature2ProcessButton";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlineChangeCircle } from "react-icons/md";
import { TbTrashX } from "react-icons/tb";

import "./Feature1.css";

const ImageComponent = ({ image }) => {
  if (image && image instanceof Blob && image.type.startsWith("image/")) {
    try {
      const imageUrl = URL.createObjectURL(image);
      return (
        <Image
          className="border border-secondary border-2 rounded-1 p-2 bg-white"
          style={{ maxHeight: "14em", maxWidth: "11.3em" }}
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
      className="border border-1 border-dark d-flex justify-content-center align-items-center"
      style={{
        height: "20em",
        width: "16em",
        borderInlineStyle: "dashed",
      }}
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        {!file && (
          <div
            onClick={handleUploadClick}
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              color: "#00ADC6",
              cursor: "pointer",
            }}
          >
            <MdOutlineAddBox
              className="me-2 mt-1 enlarge-on-hover"
              style={{ fontSize: "1.875em", cursor: "pointer" }}
            />
            <div className="h5">{text}</div>
          </div>
        )}
        {file && (
          <div className="d-flex">
            <img
              id="image-preview"
              src={file && URL.createObjectURL(file)}
              alt="uploaded file"
              style={{
                maxWidth: "95%",
                maxHeight: "18em",
              }}
            />
            <div>
              <MdOutlineChangeCircle
                className="enlarge-on-hover"
                style={{
                  fontSize: "30px",
                  color: "#00ADC6",
                  cursor: "pointer",
                }}
                onClick={handleUploadClick}
              />
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

function QueryUploadCard({ onFileChange }) {
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
      className="border border-1 border-black py-2 enlarge-on-hover-parent"
      style={{
        height: "17em",
        maxWidth: "14em",
        backgroundColor: "#F5F5F5",
        borderStyle: "dashed",
      }}
    >
      {!file ? (
        <div
          onClick={handleUploadClick}
          className="d-flex h-100 justify-content-center align-items-center"
          style={{
            color: "#00ADC6",
            cursor: "pointer",
          }}
        >
          <MdOutlineAddBox
            className="me-2 mt-1 enlarge-on-hover"
            style={{ fontSize: "2.5rem" }}
          />
        </div>
      ) : (
        <div className="d-flex">
          <ImageComponent image={file} />
          <div className="d-flex flex-column gap-1">
            <MdOutlineChangeCircle
              className="enlarge-on-hover"
              style={{
                fontSize: "1.875rem",
                color: "#00ADC6",
                cursor: "pointer",
              }}
              onClick={handleUploadClick}
            />
            <TbTrashX
              className="enlarge-on-hover"
              style={{
                fontSize: "1.875rem",
                color: "#EC4700",
                cursor: "pointer",
              }}
              onClick={() => setFile(null)}
            />
          </div>
        </div>
      )}
    </Card>
  );
}

function QueryImagesUploadBox({ handleFile2Change }) {
  return (
    <div className="d-flex flex-column border border-1 border-black">
      <div
        className="d-flex justify-content-center align-items-center h4 text-white py-4 m-0 border border-1 border-black"
        style={{ backgroundColor: "#00ADC6" }}
      >
        Ảnh đối chiếu
      </div>
      <div className="d-flex flex-column justify-content-center align-item-center gap-3 bg-white p-3 border border-1 border-black border-top-0">
        <Row className="d-flex justify-content-center align-items-center gap-3">
          <QueryUploadCard onFileChange={handleFile2Change} />
          <QueryUploadCard onFileChange={handleFile2Change} />
        </Row>
        <Row className="d-flex justify-content-center align-items-center gap-3">
          <QueryUploadCard onFileChange={handleFile2Change} />
          <QueryUploadCard onFileChange={handleFile2Change} />
        </Row>
      </div>
    </div>
  );
}

function Feature2() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleReferenceImageChange = (file) => {
    setFile1(file);
  };

  const handleQueryImageChange = (file) => {
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

  return (
    <Container style={containerStyle}>
      <Row className="p-0 m-0">
        <FunctionNavBar />
      </Row>
      <Row
        className="align-items-center"
        style={{
          minHeight: "90vh",
          backgroundColor: "#1C1B1F",
        }}
      >
        <Col
          xs={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Col
            sm={8}
            className="d-flex flex-column gap-5 justify-content-center align-items-center"
          >
            <Row className="col-11">
              <div
                className="h1 mb-4"
                style={{
                  color: "#00ADB5",
                  textAlign: "center",
                }}
              >
                So sánh với nhóm đối tượng
              </div>
            </Row>
            <Row className="d-flex flex-column gap-4 mb-3 justify-content-center align-items-center">
              <ReferentUploadCard
                text="Ảnh kiểm tra"
                onFileChange={handleReferenceImageChange}
              />
              <Feature2ProcessButton image1={file1} image2={file2} />
            </Row>
          </Col>
        </Col>
        <Col xs={6} xl={5} className="p-0">
          <QueryImagesUploadBox handleFile2Change={handleQueryImageChange} />
        </Col>
      </Row>
    </Container>
  );
}

export default Feature2;
