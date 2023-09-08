import React, { useEffect, useState } from "react";
import { FunctionNavBar } from "./NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Feature1ProcessButton from "./Feature1ProcessButton";
import { MdOutlineChangeCircle } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";
import useScreenWidth from "./useScreenWidth";

import "./Feature1.css";

function UploadCard({ text, onFileChange }) {
  const [file, setFile] = useState(null);

  const screenWidth = useScreenWidth();

  const [imageHeight, setImageHeight] = useState("15em");

  useEffect(() => {
    if (screenWidth < 992) setImageHeight("10em");
    else setImageHeight("15em");
  }, [screenWidth, setImageHeight]);

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
    <Card className="border border-1 border-dark w-100 h-100">
      <Card.Body className="d-flex justify-content-center align-items-center enlarge-on-hover-parent">
        {!file && (
          <div
            onClick={handleUploadClick}
            className="d-flex justify-content-center align-items-center gap-2 enlarge-on-hover"
            style={{
              color: "#00ADC6",
              cursor: "pointer",
            }}
          >
            <MdOutlineAddBox style={{ fontSize: "1.875em" }} />
            <div className="h5 m-0">{text}</div>
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
                maxHeight: `${imageHeight}`,
              }}
            />
            <MdOutlineChangeCircle
              style={{
                fontSize: "30px",
                color: "#00ADC6",
                cursor: "pointer",
              }}
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

  const screenWidth = useScreenWidth();

  const [cardHeight, setCardHeight] = useState("18em");

  useEffect(() => {
    if (screenWidth < 992) setCardHeight("12em");
    else setCardHeight("18em");
  }, [screenWidth, setCardHeight]);

  return (
    <Container className="mw-100 p-0 m-0">
      <Row className="p-0 m-0">
        <FunctionNavBar />
      </Row>

      <Row
        className="p-0 m-0"
        style={{
          backgroundColor: "#1C1B1F",
          minHeight:'90vh'
        }}
      >
        <Col className="d-flex flex-column justify-content-center align-items-center p-0 m-0 gap-3 gap-lg-5">
          <Row className="w-100 mt-4 mt-lg-0 mb-0 mb-lg-3 mb-xl-4 ps-0 ps-lg-4 ps-xl-5">
            <div
              className="h1 p-0 ps-xl-4 m-0 text-center text-lg-start"
              style={{
                color: "#00ADB5",
              }}
            >
              So sánh với 1 đối tượng
            </div>
          </Row>
          <Row className="d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center gap-3 gap-lg-5">
            <Col
              sm={8}
              lg={4}
              className="col-10 p-0 d-flex justify-content-center align-items-center"
              style={{ height: `${cardHeight}` }}
            >
              <UploadCard
                text="Tải lên ảnh kiểm tra"
                onFileChange={handleFile1Change}
              />
            </Col>
            <Col
              sm={8}
              lg={4}
              className="col-10 p-0 d-flex justify-content-center align-items-center"
              style={{ height: `${cardHeight}` }}
            >
              <UploadCard
                text="Tải lên ảnh đối chiếu"
                onFileChange={handleFile2Change}
              />
            </Col>
          </Row>
          <Row className="m-0">
            <Feature1ProcessButton image1={file1} image2={file2} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Feature1;
